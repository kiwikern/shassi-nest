import { Test, TestingModule } from '@nestjs/testing';
import { BcryptService } from './bcrypt.service';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('BcryptService', () => {
  let service: BcryptService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptService],
    }).compile();
    module.useLogger(new NoOpLogger());
    service = module.get<BcryptService>(BcryptService);
  });

  it('should check encrypted data', async () => {
    expect(await service.checkEncryptedData('', '')).toBe(false);
  });

  it('should hash data', async () => {
    expect(await service.hash('data')).toBeDefined();
  });
});
