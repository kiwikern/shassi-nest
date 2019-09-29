import { Crawler } from '../crawler.interface';
import { BadGatewayException, BadRequestException, HttpService, InternalServerErrorException, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM, VirtualConsole } from 'jsdom';

interface HmProductData {
  sizes: [{ sizeCode: string, size: string, name: string }];
  variants: [{ variantCode: string, size: string, sizeName: string }];
  whitePriceValue: string;
  priceClubValue: string;
  priceValue: string;
  priceSaleValue: string;
  redPriceValue: string;
  name: string;
  altName: string;
  title: string;
}

export abstract class CosWeekdayBaseCrawler implements Crawler {
  url: string;
  document: Document;
  protected productData: HmProductData;
  private availability = [];
  lowInStock: string[];

  protected abstract logger: Logger;
  protected abstract httpService: HttpService;

  async init(url: string) {
    this.url = this.normalizeUrl(url);

    const productIdMatches = /.*\.(\d+)\.html.*/.exec(url);
    if (!productIdMatches || !productIdMatches[1]) {
      this.logger.error('Could not find productId');
      throw new BadRequestException('Invalid url: ' + url);
    }
    const productId = productIdMatches[1];

    try {
      const headers = this.getHeaders();
      const virtualConsole = new VirtualConsole();
      virtualConsole.on('error', (...data) => null);
      const response = await this.httpService.get(this.url, { headers }).toPromise();
      this.document = new JSDOM(response.data, { virtualConsole }).window.document;
    } catch (e) {
      this.logger.error({
        message: 'failed to request product data',
        response: e.response ? e.response.data || e.response : '',
      });
      this.logger.error(e.message, e.stack);
      throw new InternalServerErrorException('Failed to request data');
    }
    try {
      const productDataString = this.document.getElementsByClassName(this.getProductCssClasses())[0]
      // TODO: Search all script nodes for productArticleDetails instead of getScriptCounter
        .getElementsByTagName('script')[this.getScriptCounter()].innerHTML
        .replace(/'/g, '"')
        .replace(/isDesktop \? ".*" :/g, '')
        // trailing slashes
        .replace(/\/$/gm, ',')
        .replace(/\n/g, '')
        .replace('};', '}')
        .replace(/var.*productArticleDetails = /, '')
        // trailing commas
        .replace(/\,(?!\s*?[\{\[\"\'\w])/g, '')
        .replace(/;$/, '');

      const data = JSON.parse(productDataString);

      this.productData = data[productId];
      if (!this.productData) {
        // Product is not in catalog anymore
        return;
      }
      if (data.alternate) {
        // H&M is missing name attribute, replace color placeholder
        this.productData.altName = data.alternate.replace(/ - {a.*/, ` - ${this.productData.name}`);
      }
    } catch (e) {
      this.logger.error(`Could not parse product data for ${url}, error: ${e.message}`, e.stack);
      throw new BadRequestException('The url could not be processed. Was this a proper product url?');
    }

    const apiUrl = this.getBaseUrl() + '/getAvailability?format=json&variants=';
    try {
      // might be sizes instead of variants for h&m?
      const variants = this.getProductVariants();
      const headers = this.getHeaders();
      const availabilityResponse = await this.httpService.get(apiUrl + variants, { headers }).toPromise();
      if (!Array.isArray(availabilityResponse.data.availability) || !Array.isArray(availabilityResponse.data.fewPieceLeft)) {
        throw new BadGatewayException('Unexpected availability response.');
      }
      this.availability = availabilityResponse.data.availability;
      this.lowInStock = availabilityResponse.data.fewPieceLeft;
    } catch (e) {
      this.logger.error({
        message: 'Could not get availability data',
        productUrl: this.url,
        apiUrl,
        originalError: e.message,
      }, e.stack);
      throw new InternalServerErrorException('Could not get product availability from store API.');
    }
  }

  protected getProductVariants(): string {
    return this.productData.variants.map(v => v.variantCode).join(',');
  }

  private getHeaders() {
    return {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Cookie': 'HMCORP_locale=de_DE;HMCORP_currency=EUR;',
    };
  }

  getName() {
    return this.productData.title || this.productData.altName;
  }

  getPrice(): number {
    const priceText: string = this.productData.priceClubValue
      || this.productData.priceSaleValue
      || this.productData.redPriceValue
      || this.productData.whitePriceValue
      || this.productData.priceValue;
    return parseFloat(priceText);
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
    return !!this.availability && this.availability.indexOf(id) !== -1;
  }

  isLowInStock(sizeId?: string): boolean {
    return this.isSizeAvailable(sizeId) && this.lowInStock.indexOf(sizeId) !== -1;
  }

  getUrl(): string {
    return this.url;
  }

  abstract getBaseUrl(): string;

  normalizeUrl(url): string {
    return url;
  }

  getProductCssClasses(): string {
    return 'product parbase';
  }

  getScriptCounter() {
    return 0;
  }
}
