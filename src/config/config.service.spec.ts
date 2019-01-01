import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();
    service = module.get<ConfigService>(ConfigService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(service.jwtSecret &&
      service.jwtExpiresIn &&
      service.databaseName &&
      service.databasePassword &&
      service.databaseUsername &&
      service.databasePort &&
      service.databaseHost &&
      service.frontendDomain &&
      service.mailPassword &&
      service.mailServer &&
      service.mailUsername &&
      service.telegramToken).toBeTruthy();
  });
});
