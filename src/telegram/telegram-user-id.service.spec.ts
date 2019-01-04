import { Test, TestingModule } from '@nestjs/testing';
import { TelegramUserIdService } from './telegram-user-id.service';
import { TelegramUserIdEntity } from './telegram-user-id.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('TelegramUserIdService', () => {
  let service: TelegramUserIdService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramUserIdService,
        {provide: getRepositoryToken(TelegramUserIdEntity), useValue: null},
      ],
    }).compile();
    service = module.get<TelegramUserIdService>(TelegramUserIdService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
