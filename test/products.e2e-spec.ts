import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { getConnection } from 'typeorm';
import { UsersService } from '../src/users/users.service';
import { AuthService } from '../src/auth/auth.service';
import { CreateProductDto } from '../src/products/dtos/create-product.dto';

describe('ProductsController (e2e)', () => {
  jest.setTimeout(10_000);
  const testCases = [
    {
      url: 'https://www.hm.com/de/product/08723?article=08723-J',
      name: 'H&M',
      expectedPrice: 19.99,
    },
    {
      url: 'https://www.aboutyou.de/p/only-und-sons/jeans-loom-blue-jog-pk-8472-noos-3774568',
      name: 'Aboutyou',
      expectedPrice: 39.9,
    },
    {
      url: 'https://www.amazon.de/Die-Argonauten-Maggie-Nelson-ebook/dp/B071FCV5KW/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=',
      name: 'Amazon',
      expectedPrice: 15.99,
    },
    {
      url: 'https://www.cosstores.com/en_eur/men/menswear/tops/product.ribbed-long-sleeved-t-shirt-white.0722148001.html',
      name: 'COS',
      expectedPrice: 49,
    },
  ];
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

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  testCases.forEach(({ name, expectedPrice, url }) => {
    describe(name, () => {
      it(`should init a product and then create it.`, async () => {
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
            .toBe(expectedPrice));

      });
    });
  });

});
