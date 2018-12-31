import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

class UserServiceMock {
  async findOneByUsername(username) {
    if (username === 'accept') {
      return { password: '$2b$10$NsNNUH7JZNnNvW/pQCpXf.iFO41cMVBrGYpb9IpOWjlh.N8pFhCL2' };
    } else {
      return null;
    }
  }
}

describe('AuthService', () => {
  let service: AuthService;
  const jwtServiceMock: JwtService | any = { sign: () => 'token' };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useClass: UserServiceMock,
        },
        {
          provide: JwtService,
          useValue: jwtServiceMock,
        },
      ],
    }).compile();
    service = module.get<AuthService>(AuthService);
  });

  it('should reject login if user not found', async () => {
    try {
      await service.login({ username: '', password: '' });
    } catch (e) {
      expect(e).toBeInstanceOf(UnauthorizedException);
      return;
    }
    fail('Should not allow login');
  });

  it('should reject login if password is wrong', async () => {
    try {
      await service.login({ username: 'accept', password: '' });
    } catch (e) {
      expect(e).toBeInstanceOf(UnauthorizedException);
      return;
    }
    fail('Should not allow login');
  });

  it('should accept login on correct credentials', async () => {
    const token = await service.login({ username: 'accept', password: '123456' });
    expect(token).toEqual('token');
  });
});
