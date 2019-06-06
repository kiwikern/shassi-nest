import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { UserCreateDto } from '../src/users/dtos/user-create.dto';
import { getConnection } from 'typeorm';
import Telegraf from 'telegraf';
import { TelegrafMock } from './mocks/telegraf.mock';
import { TelegramLoginData } from '../src/telegram/telegram-login-data.dto';
import { HashService } from '../src/common/hash.service';
import { ConfigService } from '../src/config/config.service';
import { TelegramUserIdService } from '../src/telegram/telegram-user-id.service';
import { ObjectID } from 'mongodb';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(Telegraf).useClass(TelegrafMock)
      .compile();
    app = moduleFixture.createNestApplication();
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
  });

  it('should reject login', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'kiwi', password: '123456' })
      .expect(401)
      .expect(res => res.body.message === 'Unknown user');
  });

  it('should reject unauthorized calls', () => {
    return request(app.getHttpServer())
      .put('/users')
      .send({ username: 'kiwi', password: '123456' })
      .expect(401);
  });

  it('should create a user, login and then update it.', async () => {
    const newUser: UserCreateDto = { username: 'kiwi', email: 'kiwi@mail.com', password: '123456' };
    await request(app.getHttpServer())
      .post('/users')
      .send(newUser)
      .expect(201)
      .expect(res => res.body.username === 'kiwi')
      .expect(res => res.body.password == null);

    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'kiWi', password: '123456' })
      .expect(201);
    const { jwt } = loginResponse.body;

    await request(app.getHttpServer())
      .put('/users')
      .set('Authorization', 'Bearer ' + jwt)
      .send({ notificationTypes: { telegram: true, email: true } })
      .expect(200)
      .expect(res => expect(res.body.notificationTypes)
        .toMatchObject({ telegram: true, email: true }));
  });

  it('should refuse to create user with same username.', async () => {
    const newUser: UserCreateDto = { username: 'kiwi', password: '123456' };

    await request(app.getHttpServer())
      .post('/users')
      .send(newUser)
      .expect(201);

    await request(app.getHttpServer())
      .post('/users')
      .send(newUser)
      .expect(400);
  });

  it('should create a user via Telegram login with username.', async () => {
    const telegramLoginData: Partial<TelegramLoginData> = {
      auth_date: Date.now() / 1000,
      first_name: 'Kim',
      id: 1234567,
      last_name: 'Kern',
      photo_url: 'https://t.me/i/userpic/23/random.jpg',
      username: 'kiwi',
    };
    const dataString = Object.keys(telegramLoginData)
      .map(k => `${k}=${telegramLoginData[k]}`)
      .join('\n');
    const configService = app.get<ConfigService>(ConfigService);
    telegramLoginData.hash = app.get<HashService>(HashService).createHash(dataString, configService.telegramToken);

    let userId = null;
    await request(app.getHttpServer())
      .post('/telegram/login')
      .send(telegramLoginData)
      .expect(201)
      .expect(res => userId = res.body.user._id)
      .expect(res => expect(res.body.user.username).toEqual('kiwi'));

    const telegramIdService = app.get<TelegramUserIdService>(TelegramUserIdService);
    await expect(telegramIdService.findTelegramId(new ObjectID(userId))).resolves.toBe(1234567);
  });

  it('should create a user via Telegram login without username.', async () => {
    const telegramLoginData: Partial<TelegramLoginData> = {
      auth_date: Date.now() / 1000,
      id: 1234567,
    };
    const dataString = Object.keys(telegramLoginData)
      .map(k => `${k}=${telegramLoginData[k]}`)
      .join('\n');
    const configService = app.get<ConfigService>(ConfigService);
    telegramLoginData.hash = app.get<HashService>(HashService).createHash(dataString, configService.telegramToken);

    let userId = null;
    await request(app.getHttpServer())
      .post('/telegram/login')
      .send(telegramLoginData)
      .expect(201)
      .expect(res => userId = res.body.user._id)
      .expect(res => expect(res.body.user.username).toEqual(expect.any(String)));

    const telegramIdService = app.get<TelegramUserIdService>(TelegramUserIdService);
    await expect(telegramIdService.findTelegramId(new ObjectID(userId))).resolves.toBe(1234567);
  });

});
