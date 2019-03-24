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

  it('should be defined', async () => {
    service.getUsersOverview.mockReturnValueOnce([]);
    expect(await controller.getAdminUserOverview()).toEqual([]);
    expect(service.getUsersOverview).toHaveBeenCalledTimes(1);
  });

});
