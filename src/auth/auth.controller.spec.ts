import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

class AuthServiceMock {

}

describe('Auth Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AuthController = module.get<AuthController>(AuthController);
    expect(controller).toBeDefined();
  });
});
