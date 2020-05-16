import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import Telegraf, { Context, Markup } from 'telegraf';
import * as session from 'telegraf/session';
import { ProductsService } from '../products/products.service';
import { ConfigService } from '../config/config.service';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';
import { InitializeProductDto } from '../products/dtos/initialize-product.dto';
import { CronJobService } from '../common/cron-job.service';
import { ObjectID } from 'mongodb';
import { ProductSizeAvailability } from '../crawler/product-size.interface';
import { CronJob } from 'cron';

/* eslint-disable @typescript-eslint/camelcase */
@Injectable()
export class TelegramService implements OnModuleInit, OnModuleDestroy {
  private static readonly ONE_DAY_MS = 1000 * 60 * 60 * 24;
  private static readonly LINK_REGEX = /^(?!\/).*((?:(?:http)|(?:www))\S+)/m;
  private logger: Logger = new Logger(TelegramService.name);
  private jobs: CronJob[] = [];
  private sessionStore: Map<string, any> = new Map();

  constructor(
    @Inject('Telegraf') private telegraf: Telegraf<any>,
    private productsService: ProductsService,
    private tokenService: TelegramTokenService,
    private telegramIdService: TelegramUserIdService,
    private cronJobService: CronJobService,
    private configService: ConfigService,
  ) {}

  onModuleInit() {
    this.telegraf.catch(err => this.handleErrors(err));
    this.telegraf.use(
      session({
        getSessionKey: ctx => `${ctx.from?.id}`,
        store: this.sessionStore,
      }),
    );
    this.telegraf.command('start', (ctx, next) => this.startCommand(ctx, next));
    this.telegraf.help((ctx, next) => this.helpCommand(ctx, next));
    this.telegraf.use((ctx, next) => this.authSession(ctx, next));
    this.telegraf.command('delete', (ctx, next) => this.deleteCommand(ctx));
    this.telegraf.hears(TelegramService.LINK_REGEX, ctx =>
      this.addProductOnURLSent(ctx, ctx.match[1]),
    );
    this.telegraf.on('photo', (ctx: Context, next) =>
      this.handleReceivedPhoto(ctx, next),
    );
    this.telegraf.on('message', (ctx: Context) =>
      this.handleMessageWithoutUrl(ctx),
    );
    (this.telegraf as any).action(/.+/, async ctx =>
      this.updateProductOnSizeChosen(ctx),
    );
    this.telegraf.startPolling();
  }

  onModuleDestroy() {
    this.telegraf.stop();
    this.jobs.forEach(job => job.stop());
  }

  handleMessageWithoutUrl(ctx: Context) {
    if (ctx.message.text && ctx.message.text.startsWith('/start')) {
      return;
    }
    this.logger.log({
      message: 'Received message without url',
      telegramMessage: ctx.message,
    });
    return ctx.reply(
      'I did not understand. 🤷‍♀️ Please, send a URL to a product. 🔗' +
        "\nOften, you can just use the share menu from your store's website.",
    );
  }

  handleReceivedPhoto(ctx: Context, next) {
    const matches = TelegramService.LINK_REGEX.exec(ctx.message.caption);
    if (matches && matches[1]) {
      return this.addProductOnURLSent(ctx, matches[1]);
    } else {
      return next();
    }
  }

  async notifyAboutUpdate(userId, text, productId) {
    const telegramId = await this.telegramIdService.findTelegramId(userId);
    if (!telegramId) {
      this.logger.log(
        `User ${userId} has telegram notification activated, but no account is linked.`,
      );
      return;
    }

    // If no session exists (e.g., after restart) init new session to store message history.
    if (!this.sessionStore.has(telegramId + '')) {
      const newSession = { session: {} };
      this.initTelegramSession(newSession, k => k);
      this.sessionStore.set(telegramId + '', newSession);
    }
    const session = this.sessionStore.get(telegramId + '').session;
    const message = await this.telegraf.telegram.sendMessage(telegramId, text, {
      parse_mode: 'Markdown',
    });
    this.addMessageHistory({ session }, message.message_id, productId);
  }

  handleErrors(err) {
    this.logger.error(err.message, err.stack);
  }

  async addProductOnURLSent(ctx, url: string) {
    try {
      const userId = ctx.session.userId;
      const product = await this.productsService.initializeProduct(url);
      if (product.sizes && product.sizes.length > 1) {
        const productId = Date.now();
        ctx.session.productData.set(productId, {
          url: product.url,
          name: product.name,
        });
        ctx.reply('Which size do you want? 📏', {
          reply_markup: this.createKeyboard(product.sizes, productId),
          reply_to_message_id: ctx.message.message_id,
        });
      } else {
        const productUpdate = {
          name: product.name,
          url: product.url,
          size: { name: 'ONESIZE', id: 'ONESIZE' },
        };
        if (
          product.sizes &&
          product.sizes[0] &&
          product.sizes[0].id !== 'ONESIZE'
        ) {
          Object.assign(productUpdate, { size: product.sizes[0] });
        }
        const newProduct = await this.productsService.addProduct(
          userId,
          productUpdate,
        );
        const reply = await ctx.reply(
          `Product ${newProduct.name} for ${newProduct.price.toFixed(
            2,
          )}€ at store ${newProduct.store} was added. 🛍️`,
        );
        this.addMessageHistory(ctx, reply.message_id, newProduct._id);
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
      ctx.answerCbQuery(`You chose ${size.name}. 📐`);
      ctx.editMessageReplyMarkup();
      const productData = ctx.session.productData.get(productId);
      if (!productData) {
        return ctx.reply(
          'Your request timed out. Please add the product again. ⌛',
          {
            reply_to_message_id:
              ctx.callbackQuery.message.reply_to_message.message_id,
          },
        );
      }
      ctx.session.productData.delete(productId);
      Object.assign(productData, { size });
      const product = await this.productsService.addProduct(
        ctx.session.userId,
        productData,
      );
      const text = `Your product ${product.name} for ${product.price.toFixed(
        2,
      )}€ at store ${product.store} with size ${
        size.name
      } was added successfully. 🛍️`;
      const reply = await ctx.editMessageText(text);
      this.addMessageHistory(ctx, reply.message_id, product._id);
    } catch (err) {
      this.handleProductAddErrors(err, ctx);
    }
  }

  private handleProductAddErrors(err, ctx: Context) {
    if (err instanceof ConflictException) {
      ctx.reply('Product has already been added. 💁‍♂️');
    } else if (err instanceof BadRequestException) {
      ctx.reply('Invalid URL. Is store supported? 🤔');
    } else if (err instanceof NotFoundException) {
      ctx.reply('Product does not exist. Check URL. 🤷‍♀️');
      this.logger.warn(err.message);
    } else {
      ctx.reply('Internal error. Could not add product. 🤦‍♂️');
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

    const length = arrayToSplit.length;
    // Last row can contain one element more.
    const maxElementsPerRow = length < 12 ? 3 : 5;
    const numberOfRows = Math.ceil(length / maxElementsPerRow);
    const elementsPerRow = Math.round(length / numberOfRows);

    const result = [];
    for (let i = 0; i < numberOfRows; i++) {
      // Add remainder to last row
      const end = i === numberOfRows - 1 ? length : (i + 1) * elementsPerRow;
      const split = arrayToSplit.slice(i * elementsPerRow, end);
      result.push(split);
    }
    return result;
  }

  async authSession(ctx, next) {
    if (ctx.session.userId) {
      return next(ctx);
    }

    const telegramId = ctx.from.id;
    const userId = await this.telegramIdService.findUserId(telegramId);
    if (userId) {
      this.initTelegramSession(ctx, userId);
      return next(ctx);
    }

    if (ctx.message.text && !ctx.message.text.includes('/start')) {
      ctx.reply(
        `You need to link your shassi account first. 🔗 Go to ${this.configService.frontendDomain}?action=createTelegramToken or click the button below.`,
        this.loginInlineButton,
      );
    }
    // Do not call next() without account.
  }

  private initTelegramSession(ctx, userId) {
    ctx.session.userId = userId;
    ctx.session.productData = new Map();
    const job = this.cronJobService.create('0 0 3 * * *', () =>
      this.cleanUpSessionData(ctx),
    );
    job.start();
    this.jobs.push(job);
  }

  cleanUpSessionData(ctx) {
    const map: Map<number, InitializeProductDto> = ctx.session.productData;
    for (const productId of map.keys()) {
      if (productId < Date.now() - TelegramService.ONE_DAY_MS) {
        map.delete(productId);
      }
    }
  }

  private loginInlineButton = {
    reply_markup: Markup.inlineKeyboard([
      {
        text: 'Login/Register',
        login_url: {
          url: `${this.configService.frontendDomain}/auth/telegram-login`,
          request_write_access: true,
        },
        domain: this.configService.frontendDomain,
      } as any,
    ]),
  };

  async startCommand(ctx: Context, next) {
    const message = ctx.message.text.replace('/start ', '');
    const params = message.split('---');
    const userId = ObjectID.isValid(params[0]) ? new ObjectID(params[0]) : null;
    const token = params.length > 1 ? params[1] : null;
    if (!token) {
      ctx.reply(
        `Hi! 👋 You need to link your shassi account first. Go to ${this.configService.frontendDomain}?action=createTelegramToken or click the button below.`,
        this.loginInlineButton,
      );
      return next(ctx);
    }
    const isValid = await this.tokenService.checkToken(userId, token);
    const isAlreadyConnected =
      (await this.telegramIdService.findTelegramId(userId)) === ctx.from.id;
    if (isValid) {
      try {
        if (!isAlreadyConnected) {
          await this.telegramIdService.saveTelegramId(userId, ctx.from.id);
        }
        ctx.reply('Welcome! 👋 Your account was successfully connected.');
        ctx.reply('You can add a product by sending its URL to this chat.');
        return this.authSession(ctx, next);
      } catch (err) {
        ctx.reply(
          'Could not connect Telegram account. Already linked to different shassi user account. 🙌',
        );
      }
    } else {
      ctx.reply('Given token was invalid. Try again! 🙇');
      ctx.reply(
        `To create a new token, go to ${this.configService.frontendDomain}?action=createTelegramToken`,
      );
    }
    return next(ctx);
  }

  helpCommand(ctx: Context, next) {
    ctx.replyWithMarkdown(`*Shassi - Your Shopping Assistant 💁‍♂️*
Shassi is a bot that helps you to buy products when they are on sale.

After you have created an account, you can add products by sending the link of the product to shassi.
It is now tracking your product and will notify you when its price or availability change. 📉

💸 Happy Shopping! 💸
`);
  }

  private readonly MAXIMUM_SESSION_DATA_LENGTH = 300;

  private addMessageHistory(
    ctx: { session: any },
    messageId: number,
    productId: ObjectID,
  ) {
    if (!ctx.session.messageHistory) {
      ctx.session.messageHistory = [];
    }

    const messageHistory = ctx.session.messageHistory;
    if (messageHistory.length >= this.MAXIMUM_SESSION_DATA_LENGTH) {
      messageHistory.shift();
    }
    messageHistory.push({ messageId, productId });
  }

  private findProductInMessageHistory(ctx, messageId: number): ObjectID | null {
    const messageHistory = ctx.session.messageHistory;
    if (!Array.isArray(messageHistory)) {
      return null;
    }

    return messageHistory.find(i => i.messageId === messageId)?.productId;
  }

  async deleteCommand(ctx) {
    const replyToMessage = ctx.message.reply_to_message;
    if (!replyToMessage) {
      return ctx.replyWithMarkdown(`Which product do you want to delete? 🗑
Simply reply to a message from shassi concerning the product you want to delete.`);
    }
    const productId = this.findProductInMessageHistory(
      ctx,
      replyToMessage.message_id,
    );
    if (!productId) {
      return ctx.replyWithMarkdown(
        `The message you replied to is not about a product or too old. Try replying to a more recent product message.`,
      );
    }
    try {
      await this.productsService.deleteProduct(ctx.session.userId, productId);
      return ctx.replyWithMarkdown(`Your product was successfully deleted. 🚮`);
    } catch (e) {
      if (e instanceof NotFoundException) {
        return ctx.replyWithMarkdown(
          `Your product has already been deleted. 🚯`,
        );
      } else {
        return ctx.replyWithMarkdown(
          `Your product could not be deleted. Sorry! 😢`,
        );
      }
    }
  }
}
