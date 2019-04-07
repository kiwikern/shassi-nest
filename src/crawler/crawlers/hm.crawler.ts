import { BadRequestException, HttpService, Injectable, Logger } from '@nestjs/common';
import { CosWeekdayBaseCrawler } from './cos-weekday-base.crawler';
import { ProductSizeAvailability } from '../product-size.interface';

@Injectable()
export class HmCrawler extends CosWeekdayBaseCrawler {
  logger: Logger = new Logger(HmCrawler.name);

  constructor(protected httpService: HttpService) {
    super();
  }

  normalizeUrl(url: string): string {
    if (!(url.includes('www2.') || url.includes('m2.hm'))) {
      throw new BadRequestException('Old urls are not supported.');
    }

    if (url.includes('m2.hm.com')) {
      return url.replace('m2.hm', 'www2.hm')
        .replace('com/m/de_de', 'com/de_de');
    } else {
      return url;
    }
  }

  getProductVariants(): string {
    return this.productData.sizes.map(v => v.sizeCode).join(',');
  }

  getSizes(): ProductSizeAvailability[] {
    return this.productData.sizes
      .map(v => ({
        id: v.sizeCode,
        name: v.name,
        isAvailable: this.isSizeAvailable(v.sizeCode),
      }));
  }

  getBaseUrl(): string {
    return 'https://www2.hm.com/de_de';
  }

}
