import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { NoOpLogger } from '../../test/mocks/no-op-logger';
import { MockType } from '../../test/mock.type';
import { usersServiceFactory } from '../../test/mocks/jest-mocks';

describe('Users Controller', () => {
  let module: TestingModule;
  let controller: UsersController;
  let userServiceMock: MockType<UsersService>;
  const user: UserEntity = {
    _id: null,
    username: 'name',
    email: '',
    notificationTypes: null,
    password: '',
  };

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useFactory: usersServiceFactory }],
    }).compile();
    module.useLogger(new NoOpLogger());
    controller = module.get<UsersController>(UsersController);
    userServiceMock = module.get(UsersService);
  });

  it('should return the user', async () => {
    await expect(controller.getUser(user)).toBe(user);
  });

  it('should create a user', async () => {
    userServiceMock.createUser.mockReturnValueOnce(user);
    await expect(
      controller.createUser({ password: '', email: '', username: 'name' }),
    ).toBe(user);
  });

  it('should update a user', async () => {
    userServiceMock.updateUser.mockReturnValueOnce(user);
    await expect(controller.updateUser(user, { email: 'test' })).toBe(user);
  });
});
