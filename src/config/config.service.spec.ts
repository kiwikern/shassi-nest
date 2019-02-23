import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();
    module.useLogger(new NoOpLogger());
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
      service.port &&
      service.telegramToken &&
      !service.isProduction).toBeTruthy();
  });

  it('should parse mongodb variables for heroku', async () => {
    const dbName = 'heroku_688asJszasbahs';
    const port = 1234;
    const password = `jsdjjb7232bjhas7a78`;
    const host = `fd568656.mydb.kiwi`;
    process.env.MONGODB_URI = `mongodb://${dbName}:${password}@${host}:${port}/${dbName}`;
    try {
      const configService = new ConfigService();
      expect(configService.databaseHost).toBe(host);
      expect(configService.databasePort).toBe(port);
      expect(configService.databasePassword).toBe(password);
      expect(configService.databaseName).toBe(dbName);
      expect(configService.databaseUsername).toBe(dbName);
    } finally {
      delete process.env.MONGODB_URI;
    }
  });

});
