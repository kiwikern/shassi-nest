import { Injectable, Logger } from '@nestjs/common';
import { CosWeekdayBaseCrawler } from './cos-weekday-base.crawler';

@Injectable()
export class WeekdayCrawler extends CosWeekdayBaseCrawler {
  logger: Logger = new Logger(WeekdayCrawler.name);
}
