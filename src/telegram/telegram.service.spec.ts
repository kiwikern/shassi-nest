import { Test, TestingModule } from '@nestjs/testing';
import { TelegramService } from './telegram.service';
import { ProductsService } from '../products/products.service';
import Telegraf, { ContextMessageUpdate } from 'telegraf';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';
import { ConfigService } from '../config/config.service';
import { BadRequestException, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CronJobService } from './cron-job.service';

type Mockify<T> = {
  [P in keyof T]: jest.Mock<{}>;
};

describe('TelegramService', () => {
  let service: TelegramService;
  let productsService: Mockify<ProductsService>;
  let telegramUserIdService: Mockify<TelegramUserIdService>;
  let tokenService: Mockify<TelegramTokenService>;
  let telegraf: Mockify<Telegraf<any>>;

  beforeEach(async () => {
    const configService: Partial<ConfigService> = { frontendDomain: 'domain' };
    const cronJobService: CronJobService = {
      create: () => ({
        start: () => null,
        nextDates: () => new Date(),
      }) as any,
    };
    productsService = jest.fn(() => ({
      addProduct: jest.fn(),
      initializeProduct: jest.fn(),
    }))();
    telegramUserIdService = jest.fn(() => ({
      findUserId: jest.fn(),
      findTelegramId: jest.fn(),
      saveTelegramId: jest.fn(),
    }))();
    tokenService = jest.fn(() => ({
      checkToken: jest.fn(),
    }))();
    telegraf = jest.fn(() => ({
      telegram: { sendMessage: jest.fn() },
      catch: jest.fn(),
      use: jest.fn(),
      command: jest.fn(),
      hears: jest.fn(),
      action: jest.fn(),
      startPolling: jest.fn(),
    }))();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramService,
        { provide: ProductsService, useValue: productsService },
        { provide: Telegraf, useValue: telegraf },
        { provide: TelegramTokenService, useValue: tokenService },
        { provide: TelegramUserIdService, useValue: telegramUserIdService },
        { provide: ConfigService, useValue: configService },
        { provide: CronJobService, useValue: cronJobService },
      ],
    }).compile();
    service = module.get<TelegramService>(TelegramService);
  });

  it('should formulate update text for price decrease', () => {
    const update = { new: { price: 90 }, old: { price: 100 }, product: { _id: 'id', name: 'name' } };
    const updateText = 'Your product [name](domain/products/id) is now at 90€ (-10.00€).';
    expect(service.getMarkdownUpdateText(update)).toBe(updateText);
  });

  it('should formulate update text for price increase', () => {
    const update = { new: { price: 110 }, old: { price: 100 }, product: { _id: 'id', name: 'name' } };
    const updateText = 'Your product [name](domain/products/id) is now at 110€ (+10.00€).';
    expect(service.getMarkdownUpdateText(update)).toBe(updateText);
  });

  it('should formulate text for availability change', () => {
    const update = { new: { price: 100 }, old: { price: 100 }, product: { _id: 'id', name: 'name' } };
    const updateText = 'Your product [name](domain/products/id) is available again.';
    expect(service.getMarkdownUpdateText(update)).toBe(updateText);
  });

  it('should ask for the size', async () => {
    const sizes = [
      { name: '1', id: 's1', isAvailable: true },
      { name: '2', id: 's2', isAvailable: false },
    ];

    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: { productData: { set: jest.fn() }, userId: '' },
      match: ['full-match', 'url'],
      message: { message_id: 'id' },
      reply: jest.fn(),
    }))();
    productsService.initializeProduct.mockReturnValue({ name: 'name', url: 'url', sizes });
    await service.addProductOnURLSent(ctx);
    expect((ctx as any).session.productData.set).toHaveBeenCalledWith(expect.any(Number),
      { name: 'name', url: 'url' });
    expect(ctx.reply).toHaveBeenCalledWith('Which size do you want?',
      { reply_markup: expect.anything(), reply_to_message_id: 'id' });
  });

  it('should add the product instantly with one size', async () => {
    const sizes = [
      { name: '1', id: 's1', isAvailable: true },
    ];

    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: { productData: { set: jest.fn() }, userId: 'userId' },
      match: ['full-match', 'url'],
      reply: jest.fn(),
    }))();
    productsService.initializeProduct.mockReturnValue({ name: 'name', url: 'url', sizes });
    productsService.addProduct.mockReturnValue({ name: 'name', price: 10, store: 'H&M' });
    await service.addProductOnURLSent(ctx);
    expect(productsService.addProduct).toHaveBeenCalledWith(
      'userId', expect.objectContaining({ size: expect.objectContaining({ id: 's1' }) }));
    expect(ctx.reply).toHaveBeenCalledWith('Product name for 10.00€ at store H&M was added.');
  });

  it('should handle rejection when product already added', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: { productData: { set: jest.fn() }, userId: '' },
      match: ['full-match', 'url'],
      reply: jest.fn(),
    }))();
    productsService.initializeProduct.mockReturnValue({ name: 'name', url: 'url' });
    productsService.addProduct.mockImplementation(() => {
      throw new ConflictException();
    });
    await service.addProductOnURLSent(ctx);
    expect(ctx.reply).toHaveBeenCalledWith('Product has already been added.');
  });

  it('should handle rejection on unknown store', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: { productData: { set: jest.fn() }, userId: '' },
      match: ['full-match', 'url'],
      reply: jest.fn(),
    }))();
    productsService.initializeProduct.mockImplementation(() => {
      throw new BadRequestException('Unknown store');
    });
    await service.addProductOnURLSent(ctx);
    expect(ctx.reply).toHaveBeenCalledWith('Invalid URL. Is store supported?');
  });

  it('should handle rejection on invalid url', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: { productData: { set: jest.fn() }, userId: '' },
      match: ['full-match', 'url'],
      reply: jest.fn(),
    }))();
    productsService.initializeProduct.mockImplementation(() => {
      throw new NotFoundException();
    });
    await service.addProductOnURLSent(ctx);
    expect(ctx.reply).toHaveBeenCalledWith('Product does not exist. Check URL.');
  });

  it('should handle rejection on internal error', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: { productData: { set: jest.fn() }, userId: '' },
      match: ['full-match', 'url'],
      reply: jest.fn(),
    }))();
    productsService.initializeProduct.mockImplementation(() => {
      throw new InternalServerErrorException();
    });
    await service.addProductOnURLSent(ctx);
    expect(ctx.reply).toHaveBeenCalledWith('Internal error. Could not add product.');
  });

  it('should update the product when a size was chosen', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: { productData: { get: jest.fn(), delete: jest.fn() }, userId: 'userId' },
      match: ['sizeName|-|sizeId|-|productSessionId'],
      reply: jest.fn(),
      answerCbQuery: jest.fn(),
      editMessageReplyMarkup: jest.fn(),
      callbackQuery: { message: { reply_to_message: { message_id: 'mId' } } },
    }))();
    (ctx as any).session.productData.get.mockReturnValue({ url: 'url' });
    productsService.addProduct.mockReturnValue({ name: 'name', price: 10, store: 'H&M' });

    await service.updateProductOnSizeChosen(ctx);
    expect(productsService.addProduct).toHaveBeenCalledWith(
      'userId', { url: 'url', size: { id: 'sizeId', name: 'sizeName' } });
    expect(ctx.answerCbQuery).toHaveBeenCalledWith('You chose sizeName.');
    expect(ctx.editMessageReplyMarkup).toHaveBeenCalledWith();
    expect(ctx.reply).toHaveBeenCalledWith(
      'Your product name for 10.00€ at store H&M with size sizeName was added successfully.',
      { reply_to_message_id: 'mId' });
    expect((ctx as any).session.productData.delete).toHaveBeenCalledWith(expect.any(Number));
  });

  it('should handle when init data in session has been deleted.', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: { productData: { get: jest.fn(), delete: jest.fn() }, userId: 'userId' },
      match: ['sizeName|-|sizeId|-|productSessionId'],
      reply: jest.fn(),
      answerCbQuery: jest.fn(),
      editMessageReplyMarkup: jest.fn(),
      callbackQuery: { message: { reply_to_message: { message_id: 'mId' } } },
    }))();
    (ctx as any).session.productData.get.mockReturnValue(null);

    await service.updateProductOnSizeChosen(ctx);
    expect(ctx.answerCbQuery).toHaveBeenCalledWith('You chose sizeName.');
    expect(ctx.editMessageReplyMarkup).toHaveBeenCalledWith();
    expect(ctx.reply).toHaveBeenCalledWith(
      'Your request timed out. Please add the product again.',
      { reply_to_message_id: 'mId' });
  });

  it('should handle errors.', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: { productData: { get: jest.fn(), delete: jest.fn() }, userId: 'userId' },
      match: ['sizeName|-|sizeId|-|productSessionId'],
      reply: jest.fn(),
      answerCbQuery: jest.fn(),
      editMessageReplyMarkup: jest.fn(),
      callbackQuery: { message: { reply_to_message: { message_id: 'mId' } } },
    }))();
    (ctx as any).session.productData.get.mockReturnValue({});

    productsService.addProduct.mockImplementation(() => {
      throw new ConflictException();
    });
    await service.updateProductOnSizeChosen(ctx);
    expect(ctx.reply).toHaveBeenCalledWith('Product has already been added.');

    productsService.addProduct.mockImplementation(() => {
      throw new NotFoundException();
    });
    await service.updateProductOnSizeChosen(ctx);
    expect(ctx.reply).toHaveBeenCalledWith('Product does not exist. Check URL.');

    productsService.addProduct.mockImplementation(() => {
      throw new BadRequestException('Unknown store');
    });
    await service.updateProductOnSizeChosen(ctx);
    expect(ctx.reply).toHaveBeenCalledWith('Product does not exist. Check URL.');

    productsService.addProduct.mockImplementation(() => {
      throw new InternalServerErrorException();
    });
    await service.updateProductOnSizeChosen(ctx);
    expect(ctx.reply).toHaveBeenCalledWith('Internal error. Could not add product.');
  });

  it('should return the userId if already in session', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: { userId: 'userId' },
    }))();
    const next = () => 'next was called';
    expect(await service.authSession(ctx, next)).toBe('next was called');
  });

  it('should initialize a new session when userId is found', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: {},
      from: { id: 'telegramId' },
    }))();
    const next = () => 'next was called';
    telegramUserIdService.findUserId.mockReturnValue('userId');
    expect(await service.authSession(ctx, next)).toBe('next was called');
    expect((ctx as any).session.userId).toBe('userId');
    expect((ctx as any).session.productData).toBeInstanceOf(Map);
  });

  it('should notify the user that authorization is needed', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: {},
      from: { id: 'telegramId' },
      message: { text: 'any text' },
      reply: jest.fn(),
    }))();
    const next = () => 'next was called';
    telegramUserIdService.findUserId.mockReturnValue(null);
    // next() is not called
    expect(await service.authSession(ctx, next)).toBe(undefined);
    // there must be no userId associated to the session
    expect((ctx as any).session.userId).toBe(undefined);
    expect(ctx.reply).toHaveBeenCalledWith(
      `You need to link your shassi account first. Go to domain?action=createTelegramToken`);
  });

  it('should not do anything when /start is running', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: {},
      from: { id: 'telegramId' },
      message: { text: '/start' },
      reply: jest.fn(),
    }))();
    const next = () => 'next was called';
    telegramUserIdService.findUserId.mockReturnValue(null);
    // next() is not called
    expect(await service.authSession(ctx, next)).toBe(undefined);
    // there must be no userId associated to the session
    expect((ctx as any).session.userId).toBe(undefined);
    expect(ctx.reply).not.toHaveBeenCalled();
  });

  it('should not clean up session data without entries', () => {
    const ctx = {
      session: { productData: new Map() },
    };
    service.cleanUpSessionData(ctx);
  });

  it('should not clean up session data without entries', () => {
    const ctx = {
      session: { productData: new Map() },
    };
    ctx.session.productData.set(Date.now(), 'remain');
    ctx.session.productData.set(Date.now() + 1, 'remain');
    ctx.session.productData.set(Date.now() - 1000 * 60 * 60 * 24 - 100, 'delete');
    ctx.session.productData.set(Date.now() - 1000 * 60 * 60 * 24 - 50, 'delete');
    service.cleanUpSessionData(ctx);
    expect(ctx.session.productData.size).toBe(2);
    for (const value of ctx.session.productData.values()) {
      expect(value).toBe('remain');
    }
  });

  it('should link telegram account if token is valid', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: {},
      from: { id: 'telegramId' },
      message: { text: '/start userId---token' },
      reply: jest.fn(),
    }))();
    const next = () => 'next was called';
    tokenService.checkToken.mockReturnValue(true);
    expect(await service.startCommand(ctx, next)).toBe('next was called');
    expect((ctx as any).session.userId).toBe('userId');
    expect(tokenService.checkToken).toHaveBeenCalledWith('userId', 'token');
    expect(telegramUserIdService.saveTelegramId).toHaveBeenCalledWith('userId', 'telegramId');
    expect(ctx.reply).toHaveBeenCalledWith(`Welcome! Your account was successfully connected.`);
    expect(ctx.reply).toHaveBeenCalledWith('You can add a product by sending its URL to this chat.');
  });

  it('should not link telegram account if already in use', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: {},
      from: { id: 'telegramId' },
      message: { text: '/start userId---token' },
      reply: jest.fn(),
    }))();
    const next = () => 'next was called';
    tokenService.checkToken.mockReturnValue(true);
    telegramUserIdService.saveTelegramId.mockImplementation(() => {
      throw new BadRequestException('User already linked with telegram Account');
    });
    expect(await service.startCommand(ctx, next)).toBe('next was called');
    expect((ctx as any).session.userId).toBe(undefined);
    expect(tokenService.checkToken).toHaveBeenCalledWith('userId', 'token');
    expect(telegramUserIdService.saveTelegramId).toHaveBeenCalledWith('userId', 'telegramId');
    expect(ctx.reply).toHaveBeenCalledWith(`Could not connect Telegram account. Already linked to different shassi user account.`);
  });

  it('should not link telegram if token invalid', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: {},
      from: { id: 'telegramId' },
      message: { text: '/start userId---token' },
      reply: jest.fn(),
    }))();
    const next = () => 'next was called';
    tokenService.checkToken.mockReturnValue(false);
    expect(await service.startCommand(ctx, next)).toBe('next was called');
    expect((ctx as any).session.userId).toBe(undefined);
    expect(tokenService.checkToken).toHaveBeenCalledWith('userId', 'token');
    expect(telegramUserIdService.saveTelegramId).not.toHaveBeenCalled();
    expect(ctx.reply).toHaveBeenCalledWith('Given token was invalid. Try again');
    expect(ctx.reply).toHaveBeenCalledWith('You need to link your shassi account first. Go to domain?action=createTelegramToken');
  });

  it('should not link telegram if token format invalid', async () => {
    const ctx: Mockify<ContextMessageUpdate> = jest.fn(() => ({
      session: {},
      from: { id: 'telegramId' },
      message: { text: '/start othertext' },
      reply: jest.fn(),
    }))();
    const next = () => 'next was called';
    tokenService.checkToken.mockReturnValue(false);
    expect(await service.startCommand(ctx, next)).toBe('next was called');
    expect((ctx as any).session.userId).toBe(undefined);
    expect(tokenService.checkToken).toHaveBeenCalled();
    expect(telegramUserIdService.saveTelegramId).not.toHaveBeenCalled();
    expect(ctx.reply).toHaveBeenCalledWith('Given token was invalid. Try again');
    expect(ctx.reply).toHaveBeenCalledWith('You need to link your shassi account first. Go to domain?action=createTelegramToken');
  });

  it('should notify about an update', async () => {
    const update = { new: { price: 1 }, old: { price: 1 }, product: { userId: 'userId' } };
    telegramUserIdService.findTelegramId.mockReturnValue('telegramId');
    await service.notifyAboutUpdate(update);
    expect(telegramUserIdService.findTelegramId).toHaveBeenCalledWith('userId');
    expect((telegraf.telegram as any).sendMessage).toHaveBeenCalledWith('telegramId', expect.any(String), { parse_mode: 'Markdown' });
  });

  it('should throw when user to be notified has no linked account', async () => {
    const update = { new: { price: 1 }, old: { price: 1 }, product: { userId: 'userId' } };
    telegramUserIdService.findTelegramId.mockReturnValue(null);
    try {
      await service.notifyAboutUpdate(update);
      fail('Should have thrown an error.');
    } catch (e) {
      expect(e.message).toBe('User has telegram notification activated, but no account is linked.');
    }
    expect(telegramUserIdService.findTelegramId).toHaveBeenCalledWith('userId');
  });

  it('should perform setup and start polling', async () => {
    service.onModuleInit();
    expect(telegraf.startPolling).toHaveBeenCalled();
  });

  it('should handle errors', () => {
    service.handleErrors(new Error('Message'));
  });

});
