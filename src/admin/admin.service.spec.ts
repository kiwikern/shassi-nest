import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { UsersService } from '../users/users.service';
import { productsServiceFactory, telegramUserIdServiceFactory, userServiceFactory } from '../../test/mocks/jest-mocks';
import { ProductsService } from '../products/products.service';
import { MockType } from '../../test/mock.type';
import { TelegramUserIdService } from '../telegram/telegram-user-id.service';

describe('AdminService', () => {
  let service: AdminService;
  let usersService: MockType<UsersService>;
  let productsService: MockType<ProductsService>;
  let telegramUserIdService: MockType<TelegramUserIdService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        { provide: UsersService, useFactory: userServiceFactory },
        { provide: ProductsService, useFactory: productsServiceFactory },
        { provide: TelegramUserIdService, useFactory: telegramUserIdServiceFactory },
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

  it('should work without any users', async () => {
    usersService.getAllUsers.mockReturnValueOnce([{ _id: '123', username: 'user' }]);
    productsService.getProducts.mockReturnValueOnce([]);
    telegramUserIdService.findTelegramId.mockReturnValue(null);
    expect(await service.getUsersOverview()).toEqual([
      { userId: '123', username: 'user', productCount: 0, isConnectedToTelegram: false },
    ]);
  });

  it('should work without any users', async () => {
    usersService.getAllUsers.mockReturnValueOnce([{ _id: '123', username: 'user' }]);
    telegramUserIdService.findTelegramId.mockReturnValue('321');
    const date = new Date();
    productsService.getProducts.mockReturnValueOnce([{ getCreatedAt: () => date, updatedAt: date }]);
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

});
