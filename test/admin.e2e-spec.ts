import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { getConnection, Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import Telegraf from 'telegraf';
import { TelegrafMock } from './mocks/telegraf.mock';
import { UsersService } from '../src/users/users.service';
import { AuthService } from '../src/auth/auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../src/users/entities/user.entity';
import { CrawlerService } from '../src/crawler/crawler.service';
import { crawlerServiceFactory } from './mocks/jest-mocks';
import { ProductsService } from '../src/products/products.service';
import { ProductEntity } from '../src/products/entities/products.entity';

describe('Admin (e2e)', () => {
  let app: INestApplication;
  let adminLogin: { jwt: string; user: UserEntity };
  let userLogin: { jwt: string; user: UserEntity };
  let productsRepository: Repository<ProductEntity>;

  async function createLogin(username): Promise<{ jwt: string; user: any }> {
    const userService = app.get(UsersService);
    const authService = app.get(AuthService);
    const userRepository: Repository<UserEntity> = app.get(getRepositoryToken(UserEntity));
    const user = await userService.createUser({ username, password: '123456' });
    await userRepository.update({ _id: user._id }, { roles: [username] });
    productsRepository = app.get(getRepositoryToken(ProductEntity));
    return authService.login({ username, password: '123456' });
  }

  let sizeId = 0;
  async function createProduct() {
    const productService = app.get(ProductsService);
    return productService.addProduct(new ObjectID(userLogin.user._id), { name: 'Product', size: { name: 'S', id: sizeId++ + '' }, url: 'hm.com' });
  }

  async function createProductWithError() {
    const product = await createProduct();
    product.errors = ['1', '2', '3'];
    product.isActive = false;
    return productsRepository.save(product);
  }

  beforeAll(async () => {
    jest.setTimeout(15_000);
    const crawlerServiceMock = crawlerServiceFactory();
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).overrideProvider(Telegraf).useClass(TelegrafMock)
      .overrideProvider(CrawlerService).useValue(crawlerServiceMock)
      .compile();
    app = moduleFixture.createNestApplication();
    await app.init();

    // drop database
    await getConnection().synchronize(true);

    adminLogin = await createLogin('admin');
    userLogin = await createLogin('user');

    // first product
    crawlerServiceMock.getUpdateData.mockReturnValueOnce(
      { price: 100, isAvailable: true, isLowInStock: false, createdAt: new Date() },
    );
    // error product
    crawlerServiceMock.getUpdateData.mockReturnValueOnce(
      { price: 100, isAvailable: true, isLowInStock: false, createdAt: new Date('2010') },
    );
    // update when reactivating product
    crawlerServiceMock.getUpdateData.mockReturnValueOnce(
      { price: 100, isAvailable: true, isLowInStock: false, createdAt: new Date('2010') },
    );

    await createProduct();
    await createProductWithError();
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  it('should reject a user without admin role', async () => {
    await request(app.getHttpServer())
      .get('/admin')
      .set('Authorization', 'Bearer ' + userLogin.jwt)
      .expect(403);

    await request(app.getHttpServer())
      .get('/admin/error-products')
      .set('Authorization', 'Bearer ' + userLogin.jwt)
      .expect(403);
  });

  it('should return the admin overview for user with admin role', async () => {
    await request(app.getHttpServer())
      .get('/admin')
      .set('Authorization', 'Bearer ' + adminLogin.jwt)
      .expect(200)
      .expect(res => expect(res.body)
        .toMatchObject([
          {
            username: 'admin',
            productCount: 0,
            userId: adminLogin.user._id,
            isConnectedToTelegram: false,
          },
          {
            username: 'user',
            productCount: 2,
            userId: userLogin.user._id,
            latestProductAddedDate: expect.stringContaining(new Date().getFullYear() + ''),
            latestProductUpdatedDate: expect.stringContaining(new Date().getFullYear() + ''),
            isConnectedToTelegram: false,
          },
        ]));
  });

  it('should return all products with errors and reactivate one', async () => {
    const errorProduct: ProductEntity = (await request(app.getHttpServer())
      .get('/admin/error-products')
      .set('Authorization', 'Bearer ' + adminLogin.jwt)
      .expect(200)
      .expect(res => expect(res.body)
        .toMatchObject([
          {
            isActive: false,
            errors: ['1', '2', '3'],
          },
        ]))).body[0];

    await request(app.getHttpServer())
      .patch(`/admin/reactivate-product/${errorProduct._id}`)
      .set('Authorization', 'Bearer ' + adminLogin.jwt)
      .expect(200)
      .expect(res => expect(res.body)
        .toMatchObject({
          _id: errorProduct._id,
          isActive: true,
          errors: [],
        }));

    await request(app.getHttpServer())
      .delete(`/admin/products/${errorProduct._id}`)
      .set('Authorization', 'Bearer ' + adminLogin.jwt)
      .expect(200);
  });

});
