import { HttpService, Injectable, Logger } from '@nestjs/common';
import { CosWeekdayBaseCrawler } from './cos-weekday-base.crawler';

@Injectable()
export class StoriesCrawler extends CosWeekdayBaseCrawler {
  logger: Logger = new Logger(StoriesCrawler.name);

  constructor(protected httpService: HttpService) {
    super();
  }

  getBaseUrl(): string {
    return 'https://stories.com';
  }

  getProductCssClasses(): string {
    return 'o-page-content';
  }

}
