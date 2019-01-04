import { Test, TestingModule } from '@nestjs/testing';
import { TelegramService } from './telegram.service';
import { ProductsService } from '../products/products.service';
import Telegraf from 'telegraf';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';
import { ConfigService } from '../config/config.service';

describe('TelegramService', () => {
  let service: TelegramService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramService,
        { provide: ProductsService, useValue: null },
        { provide: Telegraf, useValue: null },
        { provide: TelegramTokenService, useValue: null },
        { provide: TelegramUserIdService, useValue: null },
        { provide: ConfigService, useValue: null },
      ],
    }).compile();
    service = module.get<TelegramService>(TelegramService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
