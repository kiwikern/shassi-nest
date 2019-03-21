import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { UsersService } from '../users/users.service';
import { productsServiceFactory, userServiceFactory } from '../../test/mocks/jest-mocks';
import { ProductsService } from '../products/products.service';
import { MockType } from '../../test/mock.type';

describe('AdminService', () => {
  let service: AdminService;
  let usersService: MockType<UsersService>;
  let productsService: MockType<ProductsService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        { provide: UsersService, useFactory: userServiceFactory },
        { provide: ProductsService, useFactory: productsServiceFactory },
      ],
    }).compile();
    service = module.get<AdminService>(AdminService);
    usersService = module.get(UsersService);
    productsService = module.get(ProductsService);
  });

  it('should work without any users', async () => {
    usersService.getAllUsers.mockReturnValueOnce([]);
    expect(await service.getUsersOverview()).toEqual([]);
  });

  it('should work without any users', async () => {
    usersService.getAllUsers.mockReturnValueOnce([{ _id: '123', username: 'user' }]);
    productsService.getProducts.mockReturnValueOnce([]);
    expect(await service.getUsersOverview()).toEqual([
      { userId: '123', username: 'user', productCount: 0 },
    ]);
  });

  it('should work without any users', async () => {
    usersService.getAllUsers.mockReturnValueOnce([{ _id: '123', username: 'user' }]);
    const date = new Date();
    productsService.getProducts.mockReturnValueOnce([{ getCreatedAt: () => date, updatedAt: date }]);
    expect(await service.getUsersOverview()).toEqual([
      {
        userId: '123',
        username: 'user',
        productCount: 1,
        latestProductAddedDate: date,
        latestProductUpdatedDate: date,
      },
    ]);
  });

});
