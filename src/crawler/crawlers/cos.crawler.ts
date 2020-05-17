import { Injectable, Logger } from '@nestjs/common';
import { CosWeekdayBaseCrawler } from './cos-weekday-base.crawler';

@Injectable()
export class CosCrawler extends CosWeekdayBaseCrawler {
  logger: Logger = new Logger(CosCrawler.name);
}
