import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { UserCreateDto } from '../src/users/dtos/user-create.dto';
import { getConnection } from 'typeorm';
import Telegraf from 'Telegraf';
import { TelegrafMock } from './mocks/telegraf.mock';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(Telegraf).useClass(TelegrafMock)
      .compile();
    app = moduleFixture.createNestApplication();
    await app.init();

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
      .send({ userName: 'kiwi', password: '123456' })
      .expect(401)
      .expect(res => res.body.message === 'Unknown user');
  });

  it('should reject unauthorized calls', () => {
    return request(app.getHttpServer())
      .put('/users')
      .send({ userName: 'kiwi', password: '123456' })
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
      .send({ username: 'kiwi', password: '123456' })
      .expect(201);
    const { token } = loginResponse.body;

    await request(app.getHttpServer())
      .put('/users')
      .set('Authorization', 'Bearer ' + token)
      .send({ notificationTypes: { telegram: true, email: true } })
      .expect(200)
      .expect(res => expect(res.body.notificationTypes)
        .toMatchObject({ telegram: true, email: true }));
  });
});
