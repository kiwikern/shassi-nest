import { Injectable, Logger } from '@nestjs/common';
import { CosWeekdayBaseCrawler } from './cos-weekday-base.crawler';

@Injectable()
export class ArketCrawler extends CosWeekdayBaseCrawler {
  logger: Logger = new Logger(ArketCrawler.name);
}
