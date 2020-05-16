import { Test, TestingModule } from '@nestjs/testing';
import { HashService } from './hash.service';

describe('HashService', () => {
  let service: HashService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HashService],
    }).compile();

    service = module.get<HashService>(HashService);
  });

  it('should be defined', () => {
    expect(service.createHash('data', 'secret')).toEqual(
      '871f289e521daf3174cb9b6fe72c9bbf9a3d0feb9a004735afd1b86dd38cf0a2',
    );
  });
});
