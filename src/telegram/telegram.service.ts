import { BadRequestException, ConflictException, Inject, Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import Telegraf, { ContextMessageUpdate, Markup } from 'telegraf';
import * as session from 'telegraf/session';
import { ProductsService } from '../products/products.service';
import { ConfigService } from '../config/config.service';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';
import { InitializeProductDto } from '../products/dtos/initialize-product.dto';
import { CronJobService } from '../common/cron-job.service';
import { ObjectID } from 'mongodb';
import { ProductSizeAvailability } from '../crawler/product-size.interface';

@Injectable()
export class TelegramService implements OnModuleInit {

  private static readonly ONE_DAY_MS = 1000 * 60 * 60 * 24;
  private static readonly LINK_REGEX = /^(?!\/).*((?:(?:http)|(?:www))\S+)/m;
  private logger: Logger = new Logger(TelegramService.name);

  constructor(@Inject('Telegraf') private telegraf: Telegraf<any>,
              private productsService: ProductsService,
              private tokenService: TelegramTokenService,
              private telegramIdService: TelegramUserIdService,
              private cronJobService: CronJobService,
              private configService: ConfigService) {
  }

  onModuleInit() {
    this.telegraf.catch(err => this.handleErrors(err));
    this.telegraf.use(session());
    this.telegraf.command('start', (ctx, next) => this.startCommand(ctx, next));
    this.telegraf.use((ctx, next) => this.authSession(ctx, next));
    this.telegraf.hears(TelegramService.LINK_REGEX, ctx => this.addProductOnURLSent(ctx));
    (this.telegraf as any).action(/.+/, async ctx => this.updateProductOnSizeChosen(ctx));
    this.telegraf.startPolling();
  }

  async notifyAboutUpdate(userId, text) {
    const telegramId = await this.telegramIdService.findTelegramId(userId);
    if (!telegramId) {
      this.logger.log(`User ${userId} has telegram notification activated, but no account is linked.`);
      return;
    }

    this.telegraf.telegram.sendMessage(telegramId, text, { parse_mode: 'Markdown' } as any);
  }

  handleErrors(err) {
    this.logger.error(err.message, err.stack);
  }

  async addProductOnURLSent(ctx) {
    try {
      const url = ctx.match[1];
      const userId = ctx.session.userId;
      const product = await this.productsService.initializeProduct(url);
      if (product.sizes && product.sizes.length > 1) {
        const productId = Date.now();
        ctx.session.productData.set(productId, { url: product.url, name: product.name });
        ctx.reply('Which size do you want?', {
          reply_markup: this.createKeyboard(product.sizes, productId),
          reply_to_message_id: ctx.message.message_id,
        });
      } else {
        const productUpdate = { name: product.name, url: product.url, size: { name: 'ONESIZE', id: 'ONESIZE' } };
        if (product.sizes && product.sizes[0] && product.sizes[0].id !== 'ONESIZE') {
          Object.assign(productUpdate, { size: product.sizes[0] });
        }
        const newProduct = await this.productsService.addProduct(userId, productUpdate);
        ctx.reply(`Product ${newProduct.name} for ${newProduct.price.toFixed(2)}€ at store ${newProduct.store} was added.`);
      }
    } catch (err) {
      this.handleProductAddErrors(err, ctx);
    }
  }

  async updateProductOnSizeChosen(ctx) {
    try {
      const answer = ctx.match[0].split('|-|');
      const size = { name: answer[0], id: answer[1] };
      const productId = parseInt(answer[2], 10);
      ctx.answerCbQuery(`You chose ${size.name}.`);
      ctx.editMessageReplyMarkup();
      const productData = ctx.session.productData.get(productId);
      if (!productData) {
        return ctx.reply('Your request timed out. Please add the product again.',
          { reply_to_message_id: ctx.callbackQuery.message.reply_to_message.message_id });
      }
      ctx.session.productData.delete(productId);
      Object.assign(productData, { size });
      const p = await this.productsService.addProduct(ctx.session.userId, productData);
      ctx.reply(`Your product ${p.name} for ${p.price.toFixed(2)}€ at store ${p.store} with size ${size.name} was added successfully.`,
        { reply_to_message_id: ctx.callbackQuery.message.reply_to_message.message_id });
    } catch (err) {
      this.handleProductAddErrors(err, ctx);
    }
  }

  private handleProductAddErrors(err, ctx: ContextMessageUpdate) {
    if (err instanceof ConflictException) {
      ctx.reply('Product has already been added.');
    } else if (err instanceof BadRequestException) {
      ctx.reply('Invalid URL. Is store supported?');
    } else if (err instanceof NotFoundException) {
      ctx.reply('Product does not exist. Check URL.');
      this.logger.warn(err.message);
    } else {
      ctx.reply('Internal error. Could not add product.');
      this.logger.error(err.message, err.stack);
    }
  }

  private createKeyboard(sizes: ProductSizeAvailability[], productId: number) {
    const callbackButtons = sizes.map(s => {
      const buttonText = `${s.name}${s.isAvailable ? '' : ' (n/a)'}`;
      const callbackData = `${s.name}|-|${s.id}|-|${productId}`;
      return Markup.callbackButton(buttonText, callbackData);
    });
    const callbackButtonRows = this.evenlySplitArray(callbackButtons);
    return Markup.inlineKeyboard(callbackButtonRows);
  }

  evenlySplitArray<T>(arrayToSplit: T[]): T[][] {
    if (!Array.isArray(arrayToSplit)) {
      return [[]];
    }

    const splitInHalfLength = Math.round(arrayToSplit.length / 2);
    const splitInThirdLength = Math.round(arrayToSplit.length / 3);
    if (arrayToSplit.length > 6) {
      return [
        arrayToSplit.slice(0, splitInThirdLength),
        arrayToSplit.slice(splitInThirdLength, splitInThirdLength * 2),
        arrayToSplit.slice(splitInThirdLength * 2),
      ];
    } else if (arrayToSplit.length > 3) {
      return [
        arrayToSplit.slice(0, splitInHalfLength),
        arrayToSplit.slice(splitInHalfLength),
      ];
    } else {
      return [arrayToSplit];
    }
  }

  async authSession(ctx, next) {
    if (ctx.session.userId) {
      return next(ctx);
    }

    const telegramId = ctx.from.id;
    const userId = await this.telegramIdService.findUserId(telegramId);
    if (userId) {
      ctx.session.userId = userId;
      ctx.session.productData = new Map();
      const job = this.cronJobService.create('0 0 3 * * *', () => this.cleanUpSessionData(ctx));
      job.start();
      return next(ctx);
    }

    if (ctx.message.text && !ctx.message.text.includes('/start')) {
      ctx.reply(`You need to link your shassi account first. Go to ${this.configService.frontendDomain}?action=createTelegramToken`);
    }
    // Do not call next() without account.
  }

  cleanUpSessionData(ctx) {
    const map: Map<number, InitializeProductDto> = ctx.session.productData;
    for (const productId of map.keys()) {
      if (productId < Date.now() - TelegramService.ONE_DAY_MS) {
        map.delete(productId);
      }
    }
  }

  async startCommand(ctx, next) {
    const message = ctx.message.text.replace('/start ', '');
    const params = message.split('---');
    const userId = ObjectID.isValid(params[0]) ? new ObjectID(params[0]) : null;
    const token = params.length > 1 ? params[1] : null;
    const isValid = await this.tokenService.checkToken(userId, token);
    if (isValid) {
      try {
        await this.telegramIdService.saveTelegramId(userId, ctx.from.id);
        ctx.reply(`Welcome! Your account was successfully connected.`);
        ctx.reply('You can add a product by sending its URL to this chat.');
        return this.authSession(ctx, next);
      } catch (err) {
        ctx.reply(`Could not connect Telegram account. Already linked to different shassi user account.`);
      }
    } else {
      ctx.reply('Given token was invalid. Try again');
      ctx.reply(`You need to link your shassi account first. Go to ${this.configService.frontendDomain}?action=createTelegramToken`);
    }
    return next(ctx);
  }
}
