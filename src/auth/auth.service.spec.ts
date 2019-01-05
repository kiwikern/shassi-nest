import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ObjectID } from 'mongodb';
import { BcryptService } from '../common/bcrypt.service';
import { MockType } from '../../test/mock.type';

describe('AuthService', () => {
  let service: AuthService;
  const bcryptService: MockType<BcryptService> = jest.fn(() => ({
    checkEncryptedData: jest.fn(),
  }))();
  const userService: MockType<UsersService> = jest.fn(() => ({
    findOneByUsername: jest.fn(),
  }))();
  const jwtServiceMock: JwtService | any = { sign: () => 'token' };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: userService },
        { provide: JwtService, useValue: jwtServiceMock },
        { provide: BcryptService, useValue: bcryptService },
      ],
    }).compile();
    service = module.get<AuthService>(AuthService);
  });

  it('should reject login if user not found', async () => {
    bcryptService.checkEncryptedData.mockReturnValue(false);
    userService.findOneByUsername.mockReturnValue(null);
    try {
      await service.login({ username: 'user', password: '' });
      fail('Should not allow login');
    } catch (e) {
      expect(e).toBeInstanceOf(UnauthorizedException);
    }
    expect(userService.findOneByUsername).toBeCalledWith('user');
  });

  it('should reject login if password is wrong', async () => {
    bcryptService.checkEncryptedData.mockReturnValue(false);
    userService.findOneByUsername.mockReturnValue({ username: 'user', password: 'encrypted' });
    try {
      await service.login({ username: 'user', password: 'password' });
      fail('Should not allow login');
    } catch (e) {
      expect(e).toBeInstanceOf(UnauthorizedException);
    }
    expect(userService.findOneByUsername).toBeCalledWith('user');
    expect(bcryptService.checkEncryptedData).toBeCalledWith('password', 'encrypted');
  });

  it('should accept login on correct credentials', async () => {
    bcryptService.checkEncryptedData.mockReturnValue(true);
    userService.findOneByUsername.mockReturnValue(
      { _id: ObjectID.createFromTime(0), username: 'user', password: 'encrypted' });
    const token = await service.login({ username: 'user', password: 'password' });
    expect(token).toEqual('token');
    expect(userService.findOneByUsername).toBeCalledWith('user');
    expect(bcryptService.checkEncryptedData).toBeCalledWith('password', 'encrypted');
  });

  it('should validate user', async () => {
    userService.findOneByUsername.mockReturnValue('user');
    expect(await service.validateUser({ username: 'user', userId: 'id' })).toBe('user');
  });
});
