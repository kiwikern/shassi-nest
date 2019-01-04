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
    const configService: Partial<ConfigService> = { frontendDomain: 'domain' };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramService,
        { provide: ProductsService, useValue: null },
        { provide: Telegraf, useValue: null },
        { provide: TelegramTokenService, useValue: null },
        { provide: TelegramUserIdService, useValue: null },
        { provide: ConfigService, useValue: configService },
      ],
    }).compile();
    service = module.get<TelegramService>(TelegramService);
  });

  it('should be defined', () => {
    const update = { new: { price: 90 }, old: { price: 100 }, product: { _id: 'id', name: 'name' } };
    const updateText = 'Your product [name](domain/products/id) is now at 90€ (-10.00€).';
    expect(service.getMarkdownUpdateText(update)).toBe(updateText);
  });

  it('should be defined', () => {
    const update = { new: { price: 110 }, old: { price: 100 }, product: { _id: 'id', name: 'name' } };
    const updateText = 'Your product [name](domain/products/id) is now at 110€ (+10.00€).';
    expect(service.getMarkdownUpdateText(update)).toBe(updateText);
  });

  it('should be defined', () => {
    const update = { new: { price: 100 }, old: { price: 100 }, product: { _id: 'id', name: 'name' } };
    const updateText = 'Your product [name](domain/products/id) is available again.';
    expect(service.getMarkdownUpdateText(update)).toBe(updateText);
  });
});
