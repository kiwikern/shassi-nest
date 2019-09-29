import { Test } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { adminServiceFactory } from '../../test/mocks/jest-mocks';
import { MockType } from '../../test/mock.type';

describe('Admin Controller', () => {
  let controller: AdminController;
  let service: MockType<AdminService>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [
        { provide: AdminService, useFactory: adminServiceFactory },
      ],
    }).compile();
    controller = module.get<AdminController>(AdminController);
    service = module.get(AdminService);
  });

  it('should get the user overview', async () => {
    service.getUsersOverview.mockReturnValueOnce([]);
    expect(await controller.getAdminUserOverview()).toEqual([]);
    expect(service.getUsersOverview).toHaveBeenCalledTimes(1);
  });

  it('should get products with errors', async () => {
    service.getErrorProducts.mockReturnValueOnce([]);
    expect(await controller.getErrorProducts()).toEqual([]);
    expect(service.getErrorProducts).toHaveBeenCalledTimes(1);
  });

  it('should reactivate a product', async () => {
    service.reactivateProduct.mockReturnValueOnce({id: '123'});
    expect(await controller.reactivateProduct('123')).toEqual({id: '123'});
    expect(service.reactivateProduct).toHaveBeenCalledTimes(1);
  });

  it('should delete a product', async () => {
    service.deleteProduct.mockReturnValueOnce(true);
    expect(await controller.deleteProduct('123')).toBe(true);
    expect(service.deleteProduct).toHaveBeenCalledTimes(1);
  });

});
