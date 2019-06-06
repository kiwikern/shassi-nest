import { Test, TestingModule } from '@nestjs/testing';
import { TelegramLoginService } from './telegram-login.service';
import { TelegramUserIdService } from './telegram-user-id.service';
import { authServiceFactory, telegramUserIdServiceFactory, usersServiceFactory } from '../../test/mocks/jest-mocks';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { ConfigService } from '../config/config.service';
import { MockType } from '../../test/mock.type';
import { UnauthorizedException } from '@nestjs/common';
import { HashService } from '../common/hash.service';

describe('TelegramLoginService', () => {
  let service: TelegramLoginService;
  let usersService: MockType<UsersService>;
  let telegramUserIdService: MockType<TelegramUserIdService>;
  let authService: MockType<AuthService>;
  let configService: MockType<ConfigService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramLoginService,
        { provide: TelegramUserIdService, useFactory: telegramUserIdServiceFactory },
        { provide: AuthService, useFactory: authServiceFactory },
        { provide: UsersService, useFactory: usersServiceFactory },
        { provide: ConfigService, useValue: { telegramToken: 'token' } },
        { provide: HashService, useValue: { createHash: h => h } },
      ],
    }).compile();

    service = module.get<TelegramLoginService>(TelegramLoginService);
    usersService = module.get(UsersService);
    telegramUserIdService = module.get(TelegramUserIdService);
    authService = module.get(AuthService);
    configService = module.get(ConfigService);
  });

  function createLoginData({
                             auth_date = Date.now() / 1000,
                             id = 1234,
                             hash = null,
                             username = 'user',
                             first_name = 'Haifa',
                             last_name = 'Abu',
                             photo_url = 'http://url',
                           }) {
    hash = hash || `auth_date=${auth_date}
first_name=${first_name}
id=${id}
last_name=${last_name}
photo_url=${photo_url}
username=${username}`;
    return {
      id,
      auth_date,
      hash,
      username,
      first_name,
      last_name,
      photo_url,
    };
  }

  it('should reject if hash is not valid', async () => {
    await expect(service.login(createLoginData({ hash: 'wrong' })))
      .rejects.toThrow(UnauthorizedException);
  });

  it('should reject if auth_date is too old', async () => {
    await expect(service.login(createLoginData({ auth_date: Date.now() / 1000 - 10 * 60 })))
      .rejects.toThrow(UnauthorizedException);
  });

  it('should authenticate existing user', async () => {
    telegramUserIdService.findUserId.mockReturnValueOnce('id');
    usersService.findOneById.mockReturnValueOnce('user');
    authService.createToken.mockReturnValueOnce({ token: 'token', user: 'user' });
    await expect(await service.login(createLoginData({})))
      .toEqual({ token: 'token', user: 'user' });
    expect(authService.createToken).toHaveBeenCalledWith('user');
  });

  it('should create a new user', async () => {
    telegramUserIdService.findUserId.mockReturnValueOnce(null);
    usersService.createUserWithUniqueName.mockReturnValueOnce({ _id: 'userid' });
    authService.createToken.mockReturnValueOnce({ token: 'token', user: { _id: 'userid' } });
    await expect(await service.login(createLoginData({})))
      .toEqual({ token: 'token', user: { _id: 'userid' } });
    expect(telegramUserIdService.saveTelegramId).toHaveBeenCalledWith('userid', 1234);
    expect(authService.createToken).toHaveBeenCalledWith({ _id: 'userid' });
  });

});
