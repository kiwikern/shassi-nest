import { Crawler } from '../crawler.interface';
import { BadRequestException, HttpService, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM } from 'jsdom';

export abstract class CosWeekdayBaseCrawler implements Crawler {
  url: string;
  document: Document;
  private productData;
  private availability = [];
  lowInStock: string[];

  protected abstract logger: Logger;
  protected abstract httpService: HttpService;

  async init(url: string) {
    this.url = url;
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Cookie': 'HMCORP_locale=de_DE;HMCORP_currency=EUR;',
    };
    const response = await this.httpService.get(this.url, { headers }).toPromise();
    this.document = new JSDOM(response.data).window.document;
    try {
      const productDataString = this.document.getElementsByClassName(this.getProductCssClasses())[0]
        .getElementsByTagName('script')[0].innerHTML
        .replace('};', '}')
        .replace('var productArticleDetails = ', '')
        .replace(/'/g, '"')
        // trailing slashes
        .replace(/\/$/gm, ',')
        // trailing commas
        .replace(/\,(?!\s*?[\{\[\"\'\w])/g, '');
      const data = JSON.parse(productDataString);

      const productId = /(\d+).html.*$/.exec(url)[1];
      this.productData = data[productId];
      const apiUrl = this.getBaseUrl() + '/en_eur/getAvailability?format=json&variants=';
      const variants = this.productData.variants.map(v => v.variantCode).join(',');
      const availabilityResponse = await this.httpService.get(apiUrl + variants, { headers }).toPromise();
      this.availability = availabilityResponse.data.availability;
      this.lowInStock = availabilityResponse.data.fewPieceLeft;
    } catch (e) {
      this.logger.error(`Could not parse product data for ${url}, error: ${e.message}`, e.stack);
      throw new BadRequestException('The url could not be processed. Was this a proper product url?');
    }
  }

  getName() {
    return this.productData.title;
  }

  getPrice(): number {
    const price = this.productData.priceSaleValue || this.productData.priceValue;
    return parseFloat(price);
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

  isLowInStock(sizeId?: string): boolean {
    return this.isSizeAvailable(sizeId) && this.lowInStock.indexOf(sizeId) !== -1;
  }

  getUrl(): string {
    return this.url;
  }

  abstract getBaseUrl(): string;

  getProductCssClasses(): string {
    return 'product parbase';
  }
}
