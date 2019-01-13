import { Crawler } from '../crawler.interface';
import { HttpService, Injectable, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM } from 'jsdom';

@Injectable()
export class CosCrawler implements Crawler {
  url: string;
  document: Document;
  logger: Logger = new Logger(CosCrawler.name);
  private productData;
  private availability = [];

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
      const productDataString = this.document.getElementsByClassName('product parbase')[0]
        .getElementsByTagName('script')[0].innerHTML
        .replace('};', '}')
        .replace('var productArticleDetails = ', '')
        .replace(/'/g, '"')
        // trailing commas
        .replace(/\,(?!\s*?[\{\[\"\'\w])/g, '');
      const data = JSON.parse(productDataString);
      for (const prop in data) {
        if (data.hasOwnProperty(prop) && data[prop].priceValue) {
          this.productData = data[prop];
        }
      }
      const apiUrl = 'https://www.cosstores.com/en_eur/getAvailability?format=json&variants=';
      const variants = this.productData.variants.map(v => v.variantCode).join(',');
      const availabilityResponse = await this.httpService.get(apiUrl + variants, { headers }).toPromise();
      this.availability = availabilityResponse.data.availability;
    } catch (e) {
      this.logger.error(`Could not parse product data for ${url}, error: ${e.message}`, e.stack);
    }
  }

  getName() {
    return this.productData.title;
  }

  getPrice(): number {
    return parseFloat(this.productData.priceValue);
  }

  getSizes(): ProductSizeAvailability[] {
    return this.productData.variants
      .map(v => ({
        id: v.variantCode,
        name: v.sizeName,
        isAvailable: this.isSizeAvailable(v.variantCode),
      }));
  }

  isInCatalog(): boolean {
    return !!this.productData;
  }

  isSizeAvailable(id?: string): boolean {
    return this.availability.indexOf(id) !== -1;
  }

  getUrl(): string {
    return this.url;
  }

}
