import { Module } from '@nestjs/common';
import { BcryptService } from './bcrypt.service';
import { CronJobService } from './cron-job.service';

@Module({
  providers: [
    BcryptService,
    CronJobService,
  ],
  exports: [
    BcryptService,
    CronJobService,
  ],
})
export class CommonModule {
}
