import { HttpService, Injectable, Logger } from '@nestjs/common';
import { CosWeekdayBaseCrawler } from './cos-weekday-base.crawler';

@Injectable()
export class WeekdayCrawler extends CosWeekdayBaseCrawler {
  logger: Logger = new Logger(WeekdayCrawler.name);

  constructor(protected httpService: HttpService) {
    super();
  }

  getBaseUrl(): string {
    return 'https://weekday.com/en_eur';
  }
}
