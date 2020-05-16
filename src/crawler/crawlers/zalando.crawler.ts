import { Crawler } from '../crawler.interface';
import { HttpService, Injectable, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM } from 'jsdom';
import { generateUserAgent } from './user-agent-generator';

@Injectable()
export class ZalandoCrawler implements Crawler {
  logger: Logger = new Logger(ZalandoCrawler.name);
  url: string;
  articleData;

  constructor(private httpService: HttpService) {}

  async init(url: string) {
    this.url = url;
    const headers = {
      accept:
        'text/html,application/xhtml+xml,application/xmlq=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7',
      'cache-control': 'no-cache',
      'User-Agent': generateUserAgent(),
    };
    const response = await this.httpService.get(url, { headers }).toPromise();
    const document = new JSDOM(response.data).window.document;
    const jsonString = document
      .getElementById('z-vegas-pdp-props')
      .innerHTML.replace('<![CDATA[', '')
      .replace(']]>', '');
    this.articleData = JSON.parse(jsonString).model.articleInfo;
  }

  getName(): string {
    return this.articleData.name;
  }

  getPrice(sizeId): number {
    const size = this.articleData.units.find(u => u.id === sizeId);
    if (size) {
      return size.price.value;
    } else {
      this.logger.warn({
        message: 'Could not find given size',
        sizeId,
        url: this.url,
      });
      return this.articleData.displayPrice.price.value;
    }
  }

  getSizes(): ProductSizeAvailability[] {
    return this.articleData.units.map(unit => {
      return {
        id: unit.id,
        isAvailable: unit.stock > 0,
        name: unit.size.local,
      };
    });
  }

  isInCatalog(): boolean {
    return this.articleData.active;
  }

  isSizeAvailable(sizeId?: string): boolean {
    const size = this.getSizes().find(s => s.id === sizeId);
    return !!size && size.isAvailable;
  }

  isLowInStock(sizeId?: string): boolean {
    const size = this.articleData.units.find(unit => unit.id === sizeId);
    return this.isSizeAvailable(sizeId) && !!size && size.stock <= 3;
  }

  getUrl(): string {
    return this.url;
  }
}
