import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { UsersService } from '../users/users.service';
import {
  productsServiceFactory,
  telegramUserIdServiceFactory,
  usersServiceFactory,
} from '../../test/mocks/jest-mocks';
import { ProductsService } from '../products/products.service';
import { MockType } from '../../test/mock.type';
import { TelegramUserIdService } from '../telegram/telegram-user-id.service';
import { ObjectID } from 'mongodb';

describe('AdminService', () => {
  let service: AdminService;
  let usersService: MockType<UsersService>;
  let productsService: MockType<ProductsService>;
  let telegramUserIdService: MockType<TelegramUserIdService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        { provide: UsersService, useFactory: usersServiceFactory },
        { provide: ProductsService, useFactory: productsServiceFactory },
        {
          provide: TelegramUserIdService,
          useFactory: telegramUserIdServiceFactory,
        },
      ],
    }).compile();
    service = module.get<AdminService>(AdminService);
    usersService = module.get(UsersService);
    productsService = module.get(ProductsService);
    telegramUserIdService = module.get(TelegramUserIdService);
  });

  it('should work without any users', async () => {
    usersService.getAllUsers.mockReturnValueOnce([]);
    expect(await service.getUsersOverview()).toEqual([]);
  });

  it('should work without any products', async () => {
    usersService.getAllUsers.mockReturnValueOnce([
      { _id: '123', username: 'user' },
    ]);
    productsService.getProducts.mockReturnValueOnce([]);
    telegramUserIdService.findTelegramId.mockReturnValue(null);
    expect(await service.getUsersOverview()).toEqual([
      {
        userId: '123',
        username: 'user',
        productCount: 0,
        isConnectedToTelegram: false,
      },
    ]);
  });

  it('should work with one user', async () => {
    usersService.getAllUsers.mockReturnValueOnce([
      { _id: '123', username: 'user' },
    ]);
    telegramUserIdService.findTelegramId.mockReturnValue('321');
    const date = new Date();
    productsService.getProducts.mockReturnValueOnce([
      { getCreatedAt: () => date, updatedAt: date },
    ]);
    expect(await service.getUsersOverview()).toEqual([
      {
        userId: '123',
        username: 'user',
        productCount: 1,
        latestProductAddedDate: date,
        latestProductUpdatedDate: date,
        isConnectedToTelegram: true,
      },
    ]);
  });

  it('should work with multiple users and products', async () => {
    usersService.getAllUsers.mockReturnValueOnce([
      { _id: '1', username: 'user' },
      { _id: '2', username: 'user2' },
    ]);
    telegramUserIdService.findTelegramId.mockReturnValueOnce('321');
    telegramUserIdService.findTelegramId.mockReturnValueOnce(null);
    const recentDate = new Date('2019');
    const mediumDate = new Date('2015');
    const olderDate = new Date('2010');
    productsService.getProducts.mockReturnValueOnce([
      { getCreatedAt: () => olderDate, updatedAt: recentDate },
      { getCreatedAt: () => recentDate, updatedAt: olderDate },
    ]);
    productsService.getProducts.mockReturnValueOnce([
      { getCreatedAt: () => mediumDate, updatedAt: mediumDate },
      { getCreatedAt: () => recentDate, updatedAt: olderDate },
      { getCreatedAt: () => recentDate, updatedAt: recentDate },
    ]);
    expect(await service.getUsersOverview()).toEqual([
      {
        userId: '1',
        username: 'user',
        productCount: 2,
        latestProductAddedDate: recentDate,
        latestProductUpdatedDate: recentDate,
        isConnectedToTelegram: true,
      },
      {
        userId: '2',
        username: 'user2',
        productCount: 3,
        latestProductAddedDate: recentDate,
        latestProductUpdatedDate: recentDate,
        isConnectedToTelegram: false,
      },
    ]);
  });

  it('should return products with errors', async () => {
    productsService.findProductsWithErrors.mockReturnValueOnce([]);
    const productsWithErrors = await service.getErrorProducts();
    expect(productsWithErrors).toEqual([]);
  });

  it('should reactivate a product', async () => {
    productsService.reactivateProduct.mockReturnValueOnce({ id: 1 });
    await service.reactivateProduct(ObjectID.createFromTime(0));
    expect(productsService.reactivateProduct).toHaveBeenCalledTimes(1);
  });

  it('should delete a product', async () => {
    productsService.deleteProductAsAdmin.mockReturnValueOnce(true);
    await service.deleteProduct(ObjectID.createFromTime(0));
    expect(productsService.deleteProductAsAdmin).toHaveBeenCalledTimes(1);
  });
});
