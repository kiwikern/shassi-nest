import { Test, TestingModule } from '@nestjs/testing';
import { CronJobService } from './cron-job.service';

describe('CronJobService', () => {
  let service: CronJobService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CronJobService],
    }).compile();
    service = module.get<CronJobService>(CronJobService);
  });
  it('should be defined', () => {
    expect(service.create('* * * * *', () => null)).toBeDefined();
  });
});
