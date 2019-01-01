import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Telegraf, Markup, Extra } from 'telegraf';
import * as session from 'telegraf/session';
import { ProductsService } from '../products/products.service';
import { ConfigService } from '../config/config.service';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';

@Injectable()
export class TelegramService {

  private logger: Logger = new Logger(TelegramService.name);

  constructor(private telegraf: Telegraf<any>,
              private productsService: ProductsService,
              private tokenService: TelegramTokenService,
              private telegramIdService: TelegramUserIdService,
              private configService: ConfigService) {
  }

  init() {
    this.handleErrors();
    this.telegraf.use(session());
    this.telegraf.command('start', this.startCommand);
    this.telegraf.use(this.authSession);
    this.addProductOnURLSent();
    this.handleErrors();
    this.updateProductOnSizeChosen();
    this.telegraf.startPolling();
  }

  private handleErrors() {
    this.telegraf.catch(err => {
      this.logger.error('Found error: ' + err.toString());
    });
  }

  addProductOnURLSent() {
    this.telegraf.hears(/^(?!\/).*((?:(?:http)|(?:www))\S+)/m, async ctx => {
      try {
        const url = ctx.match[1];
        const userId = ctx.session.userId;
        const product = await this.productsService.initializeProduct(url);
        if (product.sizes && product.sizes.length > 1) {
          // ctx.reply('Which size do you want?', this.createKeyboard(product));
        } else {
          const productUpdate = { name: product.name, url: product.url, size: product.sizes[0] };
          if (product.sizes && product.sizes[0] && product.sizes[0].id !== 'ONESIZE') {
            Object.assign(productUpdate, { size: product.sizes[0] });
          }
          const newProduct = await this.productsService.addProduct(userId, productUpdate);
          ctx.reply(`Product ${newProduct.name} for ${newProduct.getPrice()}€ at store ${newProduct.getStoreName()} was added.`);
        }
      } catch (err) {
        this.logger.log('Could not add product.', err);
        if (err instanceof ConflictException) {
          ctx.reply('Product has already been added.');
        } else if (err.message.includes('Unknown store')) {
          ctx.reply('Invalid URL. Is store supported?');
        } else if (err instanceof NotFoundException) {
          ctx.reply('Product does not exist. Check URL.');
        } else {
          ctx.reply('Internal error. Could not add product.');
        }
      }
    });
  }

  updateProductOnSizeChosen() {
    // this.telegraf.action(/.+/, async ctx => {
    //   const answer = ctx.match[0].split('|-|');
    //   const size = { name: answer[0], id: answer[1] };
    //   const productId = answer[2];
    //   ctx.answerCbQuery(`You chose ${size.name}.`);
    //   ctx.editMessageReplyMarkup({});
      // TODO: Save init data and add product with it.
      // const p = await this.productsService.addProduct(productId, size);
      // ctx.reply(`Your product ${p.name} for ${p.price}€ at store ${p.store} with size ${size.name} was added successfully.`);
    // });
  }

  async notifyAboutUpdate(update) {
    const product = update.product;
    const priceDelta = (update.new.price - update.old.price);
    let updateText;
    if (priceDelta < 0) {
      updateText = `is now at ${update.new.price}€ (${priceDelta.toFixed(2)}€)`;
    } else if (priceDelta > 0) {
      updateText = `is now at ${update.new.price}€ (+${priceDelta.toFixed(2)}€)`;
    } else {
      updateText = `is available again`;
    }
    const telegramId = await this.telegramIdService.findTelegramId(product.userId);
    if (!telegramId) {
      throw new Error('User has telegram notification activated, but no account linked.');
    }
    const url = `[${product.name}](${this.configService.frontendDomain}/products/${product._id})`;
    const text = `Your product ${url} ${updateText}.`;
    // this.telegraf.telegram.sendMessage(telegramId, text, Extra.markdown());
  }

  // createKeyboard(sizes, productId, userId) {
  //   return Markup
  //     .inlineKeyboard(sizes.map(s => Markup.callbackButton(`${s.name}${s.isAvailable ? '' : ' (n/a)'}`, `${s.name}|-|${s.id}|-|${productId}`)))
      // .oneTime()
      // .resize()
      // .extra();
  // }

  async authSession(ctx, next) {

    if (ctx.session.userId) {
      return next(ctx);
    }

    const telegramId = ctx.from.id;
    const userId = await this.telegramIdService.findUserId(telegramId);
    if (userId) {
      ctx.session.userId = userId;
      return next(ctx);
    }

    if (ctx.message.text && !ctx.message.text.includes('/start')) {
      ctx.reply(`You need to link your shassi account first. Go to ${this.configService.frontendDomain}?action=createTelegramToken`);
    }
    // Do not call next() without account.
  }

  async startCommand(ctx, next) {
    const message = ctx.message.text.replace('/start ', '');
    const params = message.split('---');
    const userId = params[0];
    const token = params.length > 1 ? params[1] : null;
    const isValid = await this.tokenService.checkToken(userId, token);
    if (!isValid) {
      ctx.reply('Given token was invalid. Try again');
    } else {
      try {
        await this.telegramIdService.saveTelegramId(userId, ctx.from.id);
        ctx.session.userId = userId;
        ctx.reply(`Welcome! Your account was successfully connected.`);
        ctx.reply('You can add a product by sending its URL to this chat.');
      } catch (err) {
        ctx.reply(`Could not connect Telegram account. Already linked to different shassi user account.`);
      }
    }
    return next(ctx);
  }
}
