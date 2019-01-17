import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('Auth Controller', () => {
  let module: TestingModule;
  let controller: AuthController;
  const authServiceMock = { login: () => ({jwt: 'jwt', user: 'user'}) };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
      ],
    }).compile();
    controller = module.get<AuthController>(AuthController);
  });

  it('should login', async () => {
    expect(await controller.login({ username: 'user', password: 'password' }))
      .toEqual({jwt: 'jwt', user: 'user'});
  });

});
