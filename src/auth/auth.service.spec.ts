import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ObjectID } from 'mongodb';
import { BcryptService } from '../common/bcrypt.service';
import { MockType } from '../../test/mock.type';
import {
  bcryptServiceFactory,
  jwtServiceFactory,
  usersServiceFactory,
} from '../../test/mocks/jest-mocks';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('AuthService', () => {
  let service: AuthService;
  let bcryptService: MockType<BcryptService>;
  let userService: MockType<UsersService>;
  let jwtService: MockType<JwtService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useFactory: usersServiceFactory },
        { provide: JwtService, useFactory: jwtServiceFactory },
        { provide: BcryptService, useFactory: bcryptServiceFactory },
      ],
    }).compile();
    module.useLogger(new NoOpLogger());
    service = module.get<AuthService>(AuthService);
    bcryptService = module.get(BcryptService);
    userService = module.get(UsersService);
    jwtService = module.get(JwtService);
  });

  it('should reject login if user not found', async () => {
    bcryptService.checkEncryptedData.mockReturnValue(false);
    userService.findOneByUsername.mockReturnValue(null);
    await expect(
      service.login({ username: 'user', password: '' }),
    ).rejects.toThrow(UnauthorizedException);
    expect(userService.findOneByUsername).toBeCalledWith('user');
  });

  it('should reject login if password is wrong', async () => {
    bcryptService.checkEncryptedData.mockReturnValue(false);
    userService.findOneByUsername.mockReturnValue({
      username: 'user',
      password: 'encrypted',
    });
    await expect(
      service.login({ username: 'user', password: 'password' }),
    ).rejects.toThrow(UnauthorizedException);
    expect(userService.findOneByUsername).toBeCalledWith('user');
    expect(bcryptService.checkEncryptedData).toBeCalledWith(
      'password',
      'encrypted',
    );
  });

  it('should reject login if non-password account', async () => {
    bcryptService.checkEncryptedData.mockReturnValueOnce(false);
    userService.findOneByUsername.mockReturnValueOnce({
      username: 'user',
      password: null,
    });
    await expect(
      service.login({ username: 'user', password: 'password' }),
    ).rejects.toThrow(BadRequestException);
    expect(userService.findOneByUsername).toBeCalledWith('user');
  });

  it('should accept login on correct credentials', async () => {
    bcryptService.checkEncryptedData.mockReturnValue(true);
    jwtService.sign.mockReturnValue('token');
    const user = {
      _id: ObjectID.createFromTime(0),
      username: 'user',
      password: 'encrypted',
    };
    userService.findOneByUsername.mockReturnValue(user);
    const token = await service.login({
      username: 'user',
      password: 'password',
    });
    expect(token).toEqual({
      jwt: 'token',
      user: expect.objectContaining({
        username: 'user',
        _id: expect.anything(),
      }),
    });
    expect(userService.findOneByUsername).toBeCalledWith('user');
    expect(bcryptService.checkEncryptedData).toBeCalledWith(
      'password',
      'encrypted',
    );
  });

  it('should validate user', async () => {
    userService.findOneByUsername.mockReturnValue('user');
    expect(
      await service.validateUser({ username: 'user', userId: 'id', roles: [] }),
    ).toBe('user');
  });
});
