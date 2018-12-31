import { Crawler } from './crawler.interface';
import { HttpService, Injectable, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from './product-size.interface';
import { JSDOM } from 'jsdom';

@Injectable()
export class HmCrawler implements Crawler {
  url: string;
  document: Document;
  logger: Logger = new Logger(HmCrawler.name);

  constructor(private httpService: HttpService) {
  }

  async init(url: string) {
    this.url = url.replace('m.hm.com', 'www.hm.com');
    const response = await this.httpService.get(this.url).toPromise();
    this.logger.log(response.data);
    this.document = new JSDOM(response.data).window.document;
    this.logger.log(this.document);
  }

  getName(): string {
    return this.document.getElementsByTagName('h1')[0]
      .childNodes[0]
      .nodeValue
      .trim();
  }

  getPrice(): number {
    const priceSpan = this.document.getElementById('text-price');
    const children = priceSpan.children;
    let priceText;
    if (children.length > 0) {
      priceText = children[0].innerHTML;
    }
    return parseFloat(priceText.replace(',', '.'));
  }

  getSizes(): ProductSizeAvailability[] {
    const variants = this.document.getElementById('options-variants');
    if (!variants) {
      const sizeSpan = this.document.getElementById('text-selected-variant');
      let name = 'ONESIZE';
      if (sizeSpan) {
        name = (sizeSpan.innerHTML + '')
          .replace('Gr.&nbsp;', '')
          .replace('Größe&nbsp;', '')
          .trim() || 'ONESIZE';
      }
      return [{ id: 'ONESIZE', name, isAvailable: true }];
    }
    const options = variants.children;
    return Array.from(options)
      .map(child => ({
        id: child.id,
        name: child.children[0].children[0].innerHTML,
        isAvailable: !child.className.includes('soldOut'),
      }));
  }

  isInCatalog(): boolean {
    return !this.document.getElementById('errorMessage');
  }

  isSizeAvailable(id?: string): boolean {
    if (id === 'ONESIZE') {
      return true;
    }
    return !this.document.getElementById(id).className.includes('soldOut');
  }

  getUrl(): string {
    return this.url;
  }

}
