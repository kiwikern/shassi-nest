import { Test, TestingModule } from '@nestjs/testing';
import { BcryptService } from './bcrypt.service';

describe('BcryptService', () => {
  let service: BcryptService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptService],
    }).compile();
    service = module.get<BcryptService>(BcryptService);
  });
  it('should check encrypted data', async () => {
    expect(await service.checkEncryptedData('', '')).toBe(false);
  });
});
