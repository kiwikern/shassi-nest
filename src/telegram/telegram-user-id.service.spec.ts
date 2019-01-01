import { Test, TestingModule } from '@nestjs/testing';
import { TelegramUserIdService } from './telegram-user-id.service';

describe('TelegramUserIdService', () => {
  let service: TelegramUserIdService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelegramUserIdService],
    }).compile();
    service = module.get<TelegramUserIdService>(TelegramUserIdService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
