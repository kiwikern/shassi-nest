import { Crawler } from '../crawler.interface';
import { HttpService, Injectable, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM } from 'jsdom';

@Injectable()
export class ZalandoCrawler implements Crawler {
  logger: Logger = new Logger(ZalandoCrawler.name);
  url: string;
  articleData;

  constructor(private httpService: HttpService) {
  }

  async init(url: string) {
    this.url = url;
    const response = await this.httpService.get(url).toPromise();
    const document = new JSDOM(response.data).window.document;
    const jsonString = document.getElementById('z-vegas-pdp-props').innerHTML
      .replace('<![CDATA[', '')
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
      this.logger.warn({ message: 'Could not find given size', sizeId, url: this.url });
      return this.articleData.displayPrice.price.value;
    }
  }

  getSizes(): ProductSizeAvailability[] {
    return this.articleData.units
      .map(unit => {
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

  getUrl(): string {
    return this.url;
  }

}
