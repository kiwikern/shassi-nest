import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { getConnection } from 'typeorm';
import Telegraf from 'telegraf';
import { TelegrafMock } from './mocks/telegraf.mock';

describe('Admin (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    jest.setTimeout(10_000);
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

  it('should get ok as health status', async () => {
    await request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect({
        status: 'ok',
        info: { 'heap': { status: 'up' }, 'memory-rss': { status: 'up' }, 'google': { status: 'up' } },
        details: { 'heap': { status: 'up' }, 'memory-rss': { status: 'up' }, 'google': { status: 'up' } },
      });
  });

});
