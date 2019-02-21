import { Test, TestingModule } from '@nestjs/testing';
import { TelegramService } from './telegram.service';
import { ProductsService } from '../products/products.service';
import Telegraf, { ContextMessageUpdate } from 'telegraf';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';
import { ConfigService } from '../config/config.service';
import { BadRequestException, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CronJobService } from '../common/cron-job.service';
import { MockType } from '../../test/mock.type';
import { ObjectID } from 'mongodb';
import { productsServiceFactory, telegrafFactory, telegramUserIdServiceFactory, tokenServiceFactory } from '../../test/mocks/jest-mocks';

describe('TelegramService', () => {
  let service: TelegramService;
  let productsService: MockType<ProductsService>;
  let telegramUserIdService: MockType<TelegramUserIdService>;
  let tokenService: MockType<TelegramTokenService>;
  let telegraf: MockType<Telegraf<any>>;

  beforeEach(async () => {
    const configService: Partial<ConfigService> = { frontendDomain: 'domain' };
    const cronJobService: CronJobService = {
      create: () => ({
        start: () => null,
        nextDates: () => new Date(),
      }) as any,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramService,
        { provide: ProductsService, useFactory: productsServiceFactory },
        { provide: Telegraf, useFactory: telegrafFactory },
        { provide: TelegramTokenService, useFactory: tokenServiceFactory },
        { provide: TelegramUserIdService, useFactory: telegramUserIdServiceFactory },
        { provide: ConfigService, useValue: configService },
        { provide: CronJobService, useValue: cronJobService },
      ],
    }).compile();
    service = module.get<TelegramService>(TelegramService);
    productsService = module.get(ProductsService);
    telegraf = module.get(Telegraf);
    telegramUserIdService = module.get(TelegramUserIdService);
    tokenService = module.get(TelegramTokenService);
  });

  it('should ask for the size', async () => {
    const sizes = [
      { name: '1', id: 's1', isAvailable: true },
      { name: '2', id: 's2', isAvailable: false },
    ];

    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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

    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
      session: { userId: 'userId' },
    }))();
    const next = () => 'next was called';
    expect(await service.authSession(ctx, next)).toBe('next was called');
  });

  it('should initialize a new session when userId is found', async () => {
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
      session: {},
      from: { id: 'telegramId' },
      message: { text: `/start ${ObjectID.createFromTime(0)}---token` },
      reply: jest.fn(),
    }))();
    const next = () => 'next was called';
    telegramUserIdService.findUserId.mockReturnValue(ObjectID.createFromTime(0));
    tokenService.checkToken.mockReturnValue(true);
    expect(await service.startCommand(ctx, next)).toBe('next was called');
    expect((ctx as any).session.userId).toEqual(ObjectID.createFromTime(0));
    expect(tokenService.checkToken).toHaveBeenCalledWith(ObjectID.createFromTime(0), 'token');
    expect(telegramUserIdService.saveTelegramId).toHaveBeenCalledWith(ObjectID.createFromTime(0), 'telegramId');
    expect(ctx.reply).toHaveBeenCalledWith(`Welcome! Your account was successfully connected.`);
    expect(ctx.reply).toHaveBeenCalledWith('You can add a product by sending its URL to this chat.');
  });

  it('should not link telegram account if already in use', async () => {
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
      session: {},
      from: { id: 'telegramId' },
      message: { text: `/start ${ObjectID.createFromTime(0)}---token` },
      reply: jest.fn(),
    }))();
    const next = () => 'next was called';
    tokenService.checkToken.mockReturnValue(true);
    telegramUserIdService.saveTelegramId.mockImplementation(() => {
      throw new BadRequestException('User already linked with telegram Account');
    });
    expect(await service.startCommand(ctx, next)).toBe('next was called');
    expect((ctx as any).session.userId).toBe(undefined);
    expect(tokenService.checkToken).toHaveBeenCalledWith(ObjectID.createFromTime(0), 'token');
    expect(telegramUserIdService.saveTelegramId).toHaveBeenCalledWith(ObjectID.createFromTime(0), 'telegramId');
    expect(ctx.reply).toHaveBeenCalledWith(`Could not connect Telegram account. Already linked to different shassi user account.`);
  });

  it('should not link telegram if token invalid', async () => {
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
      session: {},
      from: { id: 'telegramId' },
      message: { text: `/start ${ObjectID.createFromTime(0)}---token` },
      reply: jest.fn(),
    }))();
    const next = () => 'next was called';
    tokenService.checkToken.mockReturnValue(false);
    expect(await service.startCommand(ctx, next)).toBe('next was called');
    expect((ctx as any).session.userId).toBe(undefined);
    expect(tokenService.checkToken).toHaveBeenCalledWith(ObjectID.createFromTime(0), 'token');
    expect(telegramUserIdService.saveTelegramId).not.toHaveBeenCalled();
    expect(ctx.reply).toHaveBeenCalledWith('Given token was invalid. Try again');
    expect(ctx.reply).toHaveBeenCalledWith('You need to link your shassi account first. Go to domain?action=createTelegramToken');
  });

  it('should not link telegram if token format invalid', async () => {
    // @ts-ignore
    const ctx: MockType<ContextMessageUpdate> = jest.fn(() => ({
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
    telegramUserIdService.findTelegramId.mockReturnValue('telegramId');
    await service.notifyAboutUpdate('userId', 'text');
    expect(telegramUserIdService.findTelegramId).toHaveBeenCalledWith('userId');
    expect((telegraf.telegram as any).sendMessage).toHaveBeenCalledWith('telegramId', 'text', { parse_mode: 'Markdown' });
  });

  it('should skip when user to be notified has no linked account', async () => {
    telegramUserIdService.findTelegramId.mockReturnValue(null);
    await service.notifyAboutUpdate('userId', 'text');
    expect(telegramUserIdService.findTelegramId).toHaveBeenCalledWith('userId');
    expect((telegraf.telegram as any).sendMessage).not.toHaveBeenCalled();
  });

  it('should perform setup and start polling', async () => {
    service.onModuleInit();
    expect(telegraf.startPolling).toHaveBeenCalled();
  });

  it('should handle errors', () => {
    service.handleErrors(new Error('Message'));
  });

  describe('evenlySplitArray', () => {

    it('should handle null', () => {
      expect(service.evenlySplitArray(null))
        .toEqual([[]]);
    });

    it('should handle empty array', () => {
      expect(service.evenlySplitArray([]))
        .toEqual([[]]);
    });

    it('should handle one element', () => {
      expect(service.evenlySplitArray([0]))
        .toEqual([[0]]);
    });

    it('should handle four elements', () => {
      expect(service.evenlySplitArray([0, 1, 2, 3]))
        .toEqual([[0, 1], [2, 3]]);
    });

    it('should handle five elements', () => {
      expect(service.evenlySplitArray([0, 1, 2, 3, 4]))
        .toEqual([[0, 1, 2], [3, 4]]);
    });

    it('should handle seven elements', () => {
      expect(service.evenlySplitArray([0, 1, 2, 3, 4, 5, 6]))
        .toEqual([[0, 1], [2, 3], [4, 5, 6]]);
    });

    it('should handle eight elements', () => {
      expect(service.evenlySplitArray([0, 1, 2, 3, 4, 5, 6, 7]))
        .toEqual([[0, 1, 2], [3, 4, 5], [6, 7]]);
    });

    it('should handle nine elements', () => {
      expect(service.evenlySplitArray([0, 1, 2, 3, 4, 5, 6, 7, 8]))
        .toEqual([[0, 1, 2], [3, 4, 5], [6, 7, 8]]);
    });

  });

});
