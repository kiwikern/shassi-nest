import { Injectable } from '@nestjs/common';
import { CronJob } from 'cron';

/**
 * A facade for the CronJob node module.
 * Without it, unit tests will create running cron jobs and not terminate.
 */
@Injectable()
export class CronJobService {

  create(cronTime: string, cronFunction: () => void): CronJob {
    return new CronJob({ cronTime, onTick: cronFunction, timeZone: 'Europe/Berlin' });
  }

}
