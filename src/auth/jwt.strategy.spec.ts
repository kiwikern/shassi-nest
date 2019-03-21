import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { MockType } from '../../test/mock.type';
import { authServiceFactory } from '../../test/mocks/jest-mocks';
import { NoOpLogger } from '../../test/mocks/no-op-logger';
import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '../config/config.service';
import { Role, UserEntity } from '../users/entities/user.entity';

describe('JwtStrategy', () => {
  let strategy: JwtStrategy;
  let authService: MockType<AuthService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JwtStrategy,
        { provide: AuthService, useFactory: authServiceFactory },
        { provide: ConfigService, useValue: { jwtSecret: 'secret' } },
      ],
    }).compile();
    module.useLogger(new NoOpLogger());
    strategy = module.get(JwtStrategy);
    authService = module.get(AuthService);
  });

  it('should return user if found', async () => {
    const payload = { userId: 'id', username: 'name', roles: [Role.ADMIN] };
    const user: UserEntity = { _id: '', email: '', password: '', notificationTypes: null, username: '', roles: [Role.ADMIN] };
    authService.validateUser.mockReturnValueOnce(user);
    await expect(strategy.validate(payload)).resolves.toBe(user);
  });

  it('should return user without roles', async () => {
    const payload = { userId: 'id', username: 'name', roles: [] };
    const user: UserEntity = { _id: '', email: '', password: '', notificationTypes: null, username: '' };
    authService.validateUser.mockReturnValueOnce(user);
    await expect(strategy.validate(payload)).resolves.toBe(user);
  });

  it('should reject if no user is found', async () => {
    const payload = { userId: 'id', username: 'name', roles: [] };
    authService.validateUser.mockReturnValueOnce(undefined);
    await expect(strategy.validate(payload)).rejects.toThrow(UnauthorizedException);
  });

});
