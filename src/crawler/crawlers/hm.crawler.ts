import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CosWeekdayBaseCrawler } from './cos-weekday-base.crawler';
import { ProductSizeAvailability } from '../product-size.interface';

@Injectable()
export class HmCrawler extends CosWeekdayBaseCrawler {
  logger: Logger = new Logger(HmCrawler.name);

  normalizeUrl(url: string): string {
    if (!(url.includes('www2.') || url.includes('m2.hm'))) {
      throw new BadRequestException('Old urls are not supported.');
    }

    if (url.includes('m2.hm.com')) {
      return url
        .replace('m2.hm', 'www2.hm')
        .replace('com/m/de_de', 'com/de_de');
    } else {
      return url;
    }
  }

  getSizes(): ProductSizeAvailability[] {
    return this.productData.sizes.map(v => ({
      id: v.sizeCode,
      name: v.name,
      isAvailable: this.isSizeAvailable(v.sizeCode),
    }));
  }
}
