import { HttpService, Injectable, Logger } from '@nestjs/common';
import { CosWeekdayBaseCrawler } from './cos-weekday-base.crawler';

@Injectable()
export class CosCrawler extends CosWeekdayBaseCrawler {
  logger: Logger = new Logger(CosCrawler.name);

  constructor(protected httpService: HttpService) {
    super();
  }

  getBaseUrl(): string {
    return 'https://cosstores.com/en_eur';
  }

  getApiUrl(variants: string, productId: string): string {
    // Remove 001 from productId: 0875867001 -> 0875867
    return `https://www.cosstores.com/webservices_cos/service/product/cos-europe/availability/${productId.slice(
      0,
      -3,
    )}.json`;
  }
}
