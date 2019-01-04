import { Test, TestingModule } from '@nestjs/testing';
import { TelegramTokenService } from './telegram-token.service';
import { MongoEntityManager } from 'typeorm';
import { TelegramTokenEntity } from './telegram-token.entity';
import { getRepositoryToken, getEntityManagerToken } from '@nestjs/typeorm';

describe('TelegramTokenService', () => {
  let service: TelegramTokenService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramTokenService,
        {provide: getEntityManagerToken(), useValue: null},
        {provide: getRepositoryToken(TelegramTokenEntity), useValue: null},
      ],
    }).compile();
    service = module.get<TelegramTokenService>(TelegramTokenService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
