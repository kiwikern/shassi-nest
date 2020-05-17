import { Injectable, Logger } from '@nestjs/common';
import { CosWeekdayBaseCrawler } from './cos-weekday-base.crawler';

@Injectable()
export class StoriesCrawler extends CosWeekdayBaseCrawler {
  logger: Logger = new Logger(StoriesCrawler.name);
}
