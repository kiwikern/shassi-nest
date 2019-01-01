import { Test, TestingModule } from '@nestjs/testing';
import { TelegramTokenService } from './telegram-token.service';

describe('TelegramTokenService', () => {
  let service: TelegramTokenService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelegramTokenService],
    }).compile();
    service = module.get<TelegramTokenService>(TelegramTokenService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
