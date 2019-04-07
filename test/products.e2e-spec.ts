import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { getConnection } from 'typeorm';
import { UsersService } from '../src/users/users.service';
import { AuthService } from '../src/auth/auth.service';
import { CreateProductDto } from '../src/products/dtos/create-product.dto';
import Telegraf from 'telegraf';
import { TelegrafMock } from './mocks/telegraf.mock';
import { ProductEntity } from '../src/products/entities/products.entity';

describe('ProductsController (e2e)', () => {
  jest.setTimeout(15_000);
  const testCases = [
    {
      url: 'https://www2.hm.com/de_de/productpage.0669091022.html',
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
      expectedPrice: 20,
    },
    {
      url: 'https://www.weekday.com/en_eur/men/categories/basics/product.alan-t-shirt-white.0410605002.html',
      name: 'Weekday',
      expectedPrice: 10,
    },
    {
      url: 'https://www.asos.de/river-island/river-island-schwarze-steppjacke-mit-kapuze/prd/10697359?clr=schwarz',
      name: 'Asos',
      expectedPrice: 40.49,
    },
    {
      url: 'https://en.zalando.de/burberry-sunglasses-grey-bu752k007-c11.html',
      name: 'Zalando',
      expectedPrice: 214.95,
    },
    {
      url: 'https://www.stories.com/en_eur/clothing/tops/basics/product.classic-crewneck-tee-white.0622577001.html',
      name: 'Stories',
      expectedPrice: 25,
    },
  ];
  let app: INestApplication;
  let tokenUser1: string;
  let latestProduct: ProductEntity;

  async function createLogin(username = 'kiwi'): Promise<string> {
    const userService = app.get(UsersService);
    const authService = app.get(AuthService);
    await userService.createUser({ username, password: '123456' });
    return (await authService.login({ username, password: '123456' })).jwt;
  }

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(Telegraf).useClass(TelegrafMock)
      .compile();
    app = moduleFixture.createNestApplication();
    await app.init();

    // drop database
    await getConnection().synchronize(true);

    tokenUser1 = await createLogin();
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
          .set('Authorization', `Bearer ${tokenUser1}`)
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

        latestProduct = (await request(app.getHttpServer())
            .post('/products')
            .set('Authorization', 'Bearer ' + tokenUser1)
            .send(createData)
            .expect(201)
            .expect(res => expect(res.body.price)
              .toBe(expectedPrice))
        ).body;

      });
    });
  });

  describe('product list', () => {
    it('should contain products after they were added', async () => {
      await request(app.getHttpServer())
        .get('/products')
        .set('Authorization', `Bearer ${tokenUser1}`)
        .expect(200)
        .expect(res => expect(res.body)
          .toHaveLength(testCases.length));
    });
  });

  describe('change product', () => {

    it('should mark a product as read', async () => {
      await request(app.getHttpServer())
        .post(`/products/${latestProduct._id}/markread`)
        .set('Authorization', 'Bearer ' + tokenUser1)
        .expect(201);
    });

    it('should set a product as favorite', async () => {
      await request(app.getHttpServer())
        .post(`/products/${latestProduct._id}/favorite`)
        .set('Authorization', 'Bearer ' + tokenUser1)
        .send({ isFavorite: true })
        .expect(201)
        .expect(res => expect(res.body.isFavorite).toBe(true));
    });

  });

  describe('second user', () => {
    let tokenOtherUser: string;

    beforeAll(async () =>
      tokenOtherUser = await createLogin('otheruser'));

    it('should not access products of other users', async () => {
      await request(app.getHttpServer())
        .get('/products')
        .set('Authorization', `Bearer ${tokenOtherUser}`)
        .expect(200)
        .expect(res => expect(res.body)
          .toEqual([]));
    });

    it('should not mark product of other user as read', async () => {
      await request(app.getHttpServer())
        .post(`/products/${latestProduct._id}/markread`)
        .set('Authorization', 'Bearer ' + tokenOtherUser)
        .expect(404);
    });

    it('should not update product of other user', async () => {
      await request(app.getHttpServer())
        .post(`/products/${latestProduct._id}/update`)
        .set('Authorization', `Bearer ${tokenOtherUser}`)
        .expect(404);
    });

    it('should not set product of other user as favorite', async () => {
      await request(app.getHttpServer())
        .post(`/products/${latestProduct._id}/favorite`)
        .set('Authorization', `Bearer ${tokenOtherUser}`)
        .send({ isFavorite: true })
        .expect(404);
    });

  });

});
