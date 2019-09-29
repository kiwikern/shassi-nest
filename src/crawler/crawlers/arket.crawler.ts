import { HttpService, Injectable, Logger } from '@nestjs/common';
import { CosWeekdayBaseCrawler } from './cos-weekday-base.crawler';

@Injectable()
export class ArketCrawler extends CosWeekdayBaseCrawler {
  logger: Logger = new Logger(ArketCrawler.name);

  constructor(protected httpService: HttpService) {
    super();
  }

  getBaseUrl(): string {
    return 'https://www.arket.com/en_eur/';
  }

  getProductCssClasses(): string {
    return 'o-product-details';
  }

  getScriptCounter(): number {
    return 1;
  }

}
