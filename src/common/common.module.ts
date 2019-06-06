import { Module } from '@nestjs/common';
import { BcryptService } from './bcrypt.service';
import { CronJobService } from './cron-job.service';
import { HashService } from './hash.service';

@Module({
  providers: [
    BcryptService,
    CronJobService,
    HashService,
  ],
  exports: [
    BcryptService,
    CronJobService,
  ],
})
export class CommonModule {
}
