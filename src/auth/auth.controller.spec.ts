import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('Auth Controller', () => {
  let module: TestingModule;
  let controller: AuthController;
  const authServiceMock = { login: () => ({ jwt: 'jwt', user: 'user' }) };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    }).compile();
    module.useLogger(new NoOpLogger());
    controller = module.get<AuthController>(AuthController);
  });

  it('should login', async () => {
    expect(
      await controller.login({ username: 'user', password: 'password' }),
    ).toEqual({ jwt: 'jwt', user: 'user' });
  });
});
