import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { getConnection } from 'typeorm';
import Telegraf from 'telegraf';
import { CrawlerService } from '../src/crawler/crawler.service';
import { MockType } from './mock.type';

import * as TelegramServerConstructor from 'telegram-test-server';
import { TelegramServer } from 'telegram-test-server';
import { UsersService } from '../src/users/users.service';
import { TelegramTokenService } from '../src/telegram/telegram-token.service';
import { TelegramUserIdService } from '../src/telegram/telegram-user-id.service';
import { TelegramUserIdEntity } from '../src/telegram/telegram-user-id.entity';
import { crawlerServiceFactory } from './mocks/jest-mocks';

describe('TelegramBot (e2e)', () => {
  let app: INestApplication;
  const crawlerMock: MockType<CrawlerService> = crawlerServiceFactory();
  let userId: string;
  const telegramServer: TelegramServer = new (TelegramServerConstructor as any)();
  const bot = telegramServer.createBot();

  beforeAll(async () => {
    telegramServer.start();

    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(Telegraf).useValue(new Telegraf(bot.token, { telegram: { apiRoot: telegramServer.getApiEndpoint() } } as any))
      .overrideProvider(CrawlerService).useValue(crawlerMock)
      .compile();
    app = moduleFixture.createNestApplication();

    await app.init();
  });

  async function createTelegramUserToken(): Promise<string> {
    const userService = app.get(UsersService);
    const tokenService = app.get(TelegramTokenService);
    const user = await userService.createUser({ username: 'user', password: '123456' });
    userId = user._id;
    return tokenService.createToken(user._id);
  }

  async function getTelegramId(): Promise<number> {
    const telegramIdService = app.get(TelegramUserIdService);
    return telegramIdService.findTelegramId(userId);
  }

  async function linkTelegramAccountToNewUser(telegramId: number): Promise<TelegramUserIdEntity> {
    const userService = app.get(UsersService);
    const telegramIdService = app.get(TelegramUserIdService);
    const user = await userService.createUser({ username: 'user2', password: '123456' });
    userId = user._id;
    return telegramIdService.saveTelegramId(user._id, telegramId);
  }

  beforeEach(async () => {
    // drop database
    await getConnection().synchronize(true);
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
    if (telegramServer) {
      await telegramServer.stop();
    }
  });

  it('should link a user to telegram and add a multiple-size product', async () => {
    // Start command sends invalid token
    const client = telegramServer.createUser();
    const chat = client.startBot(bot, '');
    await telegramServer.waitForNextMessages(2);
    expect(chat.history.length).toBe(3);
    expect(chat.history[1].message.text).toContain('token was invalid');
    expect(chat.history[2].message.text).toContain('need to link your shassi');

    // Posting random message without linked account
    chat.postMessage(client, { chat_id: chat.info.id, text: 'halloo' });
    await telegramServer.waitForNextMessages(1);
    expect(chat.history.length).toBe(5);
    expect(chat.history[4].message.text).toContain('need to link your shassi');

    // Link user account with a valid token
    const token = await createTelegramUserToken();
    chat.postMessage(client, {
      text: `/start ${token}`,
      entities: [
        { offset: 0, length: 6, type: 'bot_command' },
      ],
    });
    await telegramServer.waitForNextMessages(2);
    expect(chat.history[6].message.text).toContain('successfully connected');
    expect(chat.history[7].message.text).toContain('add a product');
    expect(chat.history.length).toBe(8);
    // The user should be linked to their telegram account now
    expect(await getTelegramId()).toBe(client.info.id);

    // Add a product with multiple sizes
    const url = 'http://hm.com';
    crawlerMock.getInitData.mockReturnValueOnce({
      name: 'Product with multiple sizes',
      sizes: [
        { id: '1', name: 'S', isAvailable: true },
        { id: '2', name: 'M', isAvailable: true },
      ],
      url,
    });
    chat.postMessage(client, { text: url });
    await telegramServer.waitForNextMessages(1);
    expect(crawlerMock.getInitData).toHaveBeenLastCalledWith(url);
    expect(chat.history[9].message.text).toContain('Which size do you want?');
    expect(chat.history.length).toBe(10);

    // User chooses a size and the product is added
    const chosenSize = chat.history[9].message.reply_markup.inline_keyboard[0][0];
    crawlerMock.getUpdateData.mockReturnValueOnce({
      price: 20,
      isAvailable: true,
      isLowInStock: true,
      createdAt: new Date(),
    });
    const replyMessage = Object.assign({}, chat.history[9].message, { reply_to_message: { message_id: chat.history[9].message.message_id } });
    chat.postCbQuery(client, replyMessage, chosenSize.callback_data);
    await telegramServer.waitForNextMessages(3);
    expect(chat.history.length).toBe(14);
    expect(chat.history[11].callback_query_answer.text).toContain('You chose S');
    // The inline keyboard is removed
    expect(chat.history[12].edit_message_reply_markup).toBeDefined();
    expect(chat.history[13].message.text).toContain('Product with multiple sizes for 20.00€');
    expect(crawlerMock.getUpdateData).toHaveBeenLastCalledWith(url, '1');
  });

  it('should add a one-size product with an already linked user', async () => {
    // User is already connected to Telegram
    const user = telegramServer.createUser();
    await linkTelegramAccountToNewUser(user.info.id);
    const chat2 = user.startBot(bot, '');
    await telegramServer.waitForNextMessages(2);

    // Start command sends invalid token
    expect(chat2.history.length).toBe(3);
    expect(chat2.history[1].message.text).toContain('token was invalid');
    expect(chat2.history[2].message.text).toContain('need to link your shassi');

    // Add a product with one size
    const url = 'https://hm.com';
    crawlerMock.getInitData.mockReturnValueOnce({
      name: 'Product with one size',
      sizes: [
        { id: '1', name: 'S', isAvailable: true },
      ],
      url,
    });
    crawlerMock.getUpdateData.mockReturnValueOnce({
      price: 20,
      isAvailable: true,
      isLowInStock: true,
      createdAt: new Date(),
    });
    chat2.postMessage(user, { text: url });
    await telegramServer.waitForNextMessages(1);
    expect(chat2.history.length).toBe(5);
    expect(chat2.history[4].message.text).toContain('Product with one size for 20.00€');
    expect(crawlerMock.getUpdateData).toHaveBeenLastCalledWith(url, '1');
  });

});
