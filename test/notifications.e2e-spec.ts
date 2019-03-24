import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { getConnection } from 'typeorm';
import Telegraf from 'telegraf';
import { CrawlerService } from '../src/crawler/crawler.service';
import { MockType } from './mock.type';

import * as TelegramServerConstructor from 'telegram-test-server';
import { Chat, TelegramServer } from 'telegram-test-server';
import { UsersService } from '../src/users/users.service';
import { TelegramUserIdService } from '../src/telegram/telegram-user-id.service';
import { crawlerServiceFactory } from './mocks/jest-mocks';
import { ProductsService } from '../src/products/products.service';
import { NotificationsService } from '../src/notifications/notifications.service';

describe('Notifications (e2e)', () => {
  let app: INestApplication;
  const crawlerMock: MockType<CrawlerService> = crawlerServiceFactory();
  let userId: string;
  const telegramServer: TelegramServer = new (TelegramServerConstructor as any)();
  const bot = telegramServer.createBot();
  let notificationsService: NotificationsService;

  beforeAll(async () => {
    telegramServer.start();

    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(Telegraf).useValue(new Telegraf(bot.token, { telegram: { apiRoot: telegramServer.getApiEndpoint() } } as any))
      .overrideProvider(CrawlerService).useValue(crawlerMock)
      .compile();
    app = moduleFixture.createNestApplication();
    notificationsService = app.get(NotificationsService);

    await app.init();
  });

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

  let productCount = 0;

  async function createProduct() {
    const productService = app.get(ProductsService);
    crawlerMock.getUpdateData.mockReturnValueOnce({ price: 100, isAvailable: true, isLowInStock: false });
    await productService.addProduct(userId, { name: 'Product', size: { name: 'S', id: '01' }, url: 'hm.com/' + productCount });
    productCount++;
  }

  async function linkTelegramAccountToNewUser(): Promise<Chat> {
    const userService = app.get(UsersService);
    const telegramIdService = app.get(TelegramUserIdService);
    const user = await userService.createUser({ username: 'user2', password: '123456' });
    userId = user._id;
    const client = telegramServer.createUser();
    await telegramIdService.saveTelegramId(user._id, client.info.id);
    return client.startBot(bot, '');
  }

  it('should notify about two product updates', async () => {
    const chat = await linkTelegramAccountToNewUser();
    await createProduct();
    await createProduct();
    await createProduct();
    // price update
    crawlerMock.getUpdateData.mockReturnValueOnce({ price: 90, isAvailable: true, isLowInStock: true });
    // low in stock update
    crawlerMock.getUpdateData.mockReturnValueOnce({ price: 100, isAvailable: true, isLowInStock: true });
    // no update
    crawlerMock.getUpdateData.mockReturnValueOnce({ price: 100, isAvailable: true, isLowInStock: false });
    await notificationsService.sendNotificationsPerUser();
    await telegramServer.waitForNextMessages(2);
    expect(chat.history.length).toBe(4);
    const notifications = [chat.history[2].message.text, chat.history[3].message.text];
    // The order of the HTTP requests can differ
    expect(notifications).toEqual(expect.arrayContaining([
      expect.stringContaining('-10.00€, low in stock'),
      expect.stringContaining('now low in stock'),
    ]));
  });

});
