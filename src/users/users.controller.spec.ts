import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';

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
  const user: UserEntity = { id: '100', username: 'name', email: '', notificationTypes: null, password: '' };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useClass: UserServiceMock },
      ],
    }).compile();
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
