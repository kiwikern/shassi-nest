import { Crawler } from '../crawler.interface';
import { BadRequestException, HttpService, Injectable, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM } from 'jsdom';

@Injectable()
export class AsosCrawler implements Crawler {
  private logger: Logger = new Logger(AsosCrawler.name);
  private url: string;
  private document: Document;
  private apiData;
  private productData;

  constructor(private httpService: HttpService) {
  }

  async init(url: string) {
    this.url = url;
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Cookie': 'HMCORP_locale=de_DE;HMCORP_currency=EUR;',
    };
    const response = await this.httpService.get(this.url, { headers }).toPromise();
    this.document = new JSDOM(response.data).window.document;
    try {
      let script;
      for (const s of this.document.scripts) {
        if (s.innerHTML.includes('Pages/FullProduct')) {
          script = s;
          break;
        }
      }
      const jsonString = script.innerHTML
        .replace(/\n/mg, '')
        .replace(/.*view\('/mg, '')
        .replace(/',.*/, '');
      this.productData = JSON.parse(jsonString);
      const productId = /\/prd\/(\d+)/.exec(url)[1];
      const apiUrl = 'https://www.asos.de/api/product/catalogue/v2/stockprice?currency=EUR&store=DE&productIds=';
      const apiResponse = await this.httpService.get(apiUrl + productId, { headers }).toPromise();
      this.apiData = apiResponse.data[0];
    } catch (e) {
      this.logger.error(`Could not parse product data for ${url}, error: ${e.message}`, e.stack);
      throw new BadRequestException('The url could not be processed. Was this a proper product url?');
    }
  }

  getName() {
    return this.productData.name;
  }

  getPrice(sizeId): number {
    const size = this.apiData.variants.find(v => v.variantId + '' === sizeId);
    if (size) {
      return size.price.current.value;
    } else {
      return this.apiData.productPrice.current.value;
    }
  }

  getSizes(): ProductSizeAvailability[] {
    return this.apiData.variants
      .map(v => ({
        id: v.variantId + '',
        name: this.getSizeName(v.variantId + ''),
        isAvailable: v.isInStock,
      }));
  }

  private getSizeName(id): string {
    const size = this.productData.variants.find(v => v.variantId + '' === id);
    if (size) {
      return size.size;
    } else {
      this.logger.warn({ message: 'No size found for sizeId.', url: this.url, id });
      return 'NOSIZE';
    }
  }

  isInCatalog(): boolean {
    return !!this.apiData;
  }

  isSizeAvailable(id?: string): boolean {
    const size = this.apiData.variants.find(v => v.variantId + '' === id);
    return !!size && size.isInStock;
  }

  getUrl(): string {
    return this.url;
  }

}
