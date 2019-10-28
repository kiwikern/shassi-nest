import { Test, TestingModule } from '@nestjs/testing';
import { CronJobService } from './cron-job.service';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('CronJobService', () => {
  let service: CronJobService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CronJobService],
    }).compile();
    module.useLogger(new NoOpLogger());
    service = module.get<CronJobService>(CronJobService);
  });

  it('should be defined', () => {
    const cronJob = service.create('00 00 8 * * *', () => null);
    expect(cronJob.nextDate().format('z')).toMatch(/CEST|CST|CET/);
    expect(cronJob.nextDate().hour()).toBe(8);
  });

});
