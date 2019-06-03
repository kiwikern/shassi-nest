import { Test, TestingModule } from '@nestjs/testing';
import { TelegramLoginService } from './telegram-login.service';
import { TelegramUserIdService } from './telegram-user-id.service';
import { authServiceFactory, telegramUserIdServiceFactory, userServiceFactory } from '../../test/mocks/jest-mocks';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { ConfigService } from '../config/config.service';

describe('TelegramLoginService', () => {
  let service: TelegramLoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramLoginService,
        { provide: TelegramUserIdService, useFactory: telegramUserIdServiceFactory },
        { provide: AuthService, useFactory: authServiceFactory },
        { provide: UsersService, useFactory: userServiceFactory },
        { provide: ConfigService, useValue: { telegramToken: 'token' } },
      ],
    }).compile();

    service = module.get<TelegramLoginService>(TelegramLoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
