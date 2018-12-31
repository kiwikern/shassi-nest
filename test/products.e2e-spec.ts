import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { getConnection } from 'typeorm';
import { UsersService } from '../src/users/users.service';
import { AuthService } from '../src/auth/auth.service';
import { CreateProductDto } from '../src/products/dtos/create-product.dto';

describe('ProductsController (e2e)', () => {
  const url = 'https://www.hm.com/de/product/08723?article=08723-A';
  let app: INestApplication;
  let token: string;

  async function createLogin() {
    const userService = app.get(UsersService);
    const authService = app.get(AuthService);
    await userService.createUser({ username: 'kiwi', password: '123456', email: 'mail@mail.local' });
    token = await authService.login({ username: 'kiwi', password: '123456' });
  }

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();

    // drop database
    await getConnection().synchronize(true);

    await createLogin();
  });

  it('should init a product and then create it.', async () => {
    const initData = (await request(app.getHttpServer())
      .post('/products/init')
      .set('Authorization', 'Bearer ' + token)
      .send({ url })
      .expect(201)
      .expect(res => expect(res.body.name)
        .toBeDefined()))
      .body;

    const createData: CreateProductDto = {
      url: initData.url,
      name: initData.name,
      size: initData.sizes[0],
    };
    await request(app.getHttpServer())
      .post('/products')
      .set('Authorization', 'Bearer ' + token)
      .send(createData)
      .expect(201)
      .expect(res => expect(res.body.price)
        .toBe(19.99));

  });
});
