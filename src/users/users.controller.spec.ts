import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

class UserServiceMock {
  findOneByUsername(userName) {
    return { userId: '100' };
  }

  createUser() {
    return { userId: '100' };
  }

  updateUser() {
    return { userId: '100' };
  }
}

describe('Users Controller', () => {
  let module: TestingModule;
  let controller: UsersController;
  const user: UserEntity = { _id: null, username: 'name', email: '', notificationTypes: null, password: '' };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useClass: UserServiceMock },
      ],
    }).compile();
    module.useLogger(new NoOpLogger());
    controller = module.get<UsersController>(UsersController);
  });

  it('should return the user', async () => {
    expect(controller.getUser(user)).toBeDefined();
  });

  it('should return the user', async () => {
    expect(controller.createUser({ password: '', email: '', username: 'name' })).toBeDefined();
  });

  it('should return the user', async () => {
    expect(controller.updateUser(user, { email: 'test' })).toBeDefined();
  });
});
