import { Crawler } from './crawler.interface';
import { HttpService, Injectable, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from './product-size.interface';
import { JSDOM } from 'jsdom';

@Injectable()
export class AboutyouCrawler implements Crawler {
  url: string;
  body;
  logger: Logger = new Logger(AboutyouCrawler.name);

  constructor(private httpService: HttpService) {
  }

  async init(url: string) {
    this.url = url;
    const productId = /\d+$/.exec(url)[0];
    const apiUrl = `https://api.aboutyou.de/products/${productId}?include=variants.sizes`;
    const response = await this.httpService.get(apiUrl).toPromise();
    this.body = response.data;
  }

  getName(): string {
    return this.body.data.attributes.name;
  }

  getPrice(sizeId): number {
    return this.body.included[sizeId].attributes.price.current / 100;
  }

  getSizes(): ProductSizeAvailability[] {
    return Object.keys(this.body.included)
      .filter(key => key.startsWith('variants:'))
      .map(sizeId => {
        const size = this.body.included[sizeId].attributes;
        return {
          id: sizeId,
          isAvailable: size.quantity > 0,
          name: size.sizes.shop,
        };
      });

  }

  isInCatalog(): boolean {
    return !this.body.errors;
  }

  isSizeAvailable(sizeId?: string): boolean {
    return this.body.included[sizeId].attributes.quantity > 0;
  }

  getUrl(): string {
    return this.url;
  }

}
