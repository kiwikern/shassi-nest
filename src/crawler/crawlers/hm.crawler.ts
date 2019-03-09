import { Crawler } from '../crawler.interface';
import { BadRequestException, HttpService, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM, VirtualConsole } from 'jsdom';

interface HmProductData {
  sizes: [{ sizeCode: string, size: string, name: string }];
  whitePriceValue: string;
  priceClubValue: string;
  altName: string;
}

@Injectable()
export class HmCrawler implements Crawler {
  url: string;
  productData: HmProductData;
  document: Document;
  availability: string[];
  lowInStock: string[];
  logger: Logger = new Logger(HmCrawler.name);

  constructor(private httpService: HttpService) {
  }

  async init(url: string) {
    if (!(url.includes('www2.') || url.includes('m2.hm'))) {
      throw new BadRequestException('Old urls are not supported.');
    }

    if (url.includes('m2.hm.com')) {
      this.url = url.replace('m2.hm', 'www2.hm')
        .replace('com/m/de_de', 'com/de_de');
    } else {
      this.url = url;
    }

    const productIdMatches = /.*\.(\d+)\.html.*/.exec(url);
    if (!productIdMatches || !productIdMatches[1]) {
      this.logger.error('Could not find productId');
      throw new BadRequestException('Invalid url: ' + url);
    }

    try {
      const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Cookie': 'HMCORP_locale=de_DE;HMCORP_currency=EUR;',
      };
      const response = await this.httpService.get(this.url, { headers }).toPromise();
      const virtualConsole = new VirtualConsole();
      virtualConsole.on('error', (...data) => null);
      this.document = new JSDOM(response.data, { virtualConsole }).window.document;
    } catch (e) {
      this.logger.error({
        message: 'failed to request product data',
        response: e.response ? e.response.data || e.response : '',
      });
      this.logger.error(e.message, e.stack);
      throw new InternalServerErrorException('Failed to request data');
    }

    const productDataString = this.document.getElementsByClassName('product parbase')[0]
      .getElementsByTagName('script')[0].innerHTML
      .replace(/'/g, '"')
      .replace(/isDesktop \? ".*" :/g, '')
      .replace(/\n/g, '')
      .replace(/var.*productArticleDetails = /, '')
      // trailing slashes
      .replace(/\/$/gm, ',')
      // trailing commas
      .replace(/\,(?!\s*?[\{\[\"\'\w])/g, '')
      .replace(/;$/, '');

    const productId = productIdMatches[1];

    const productData = JSON.parse(productDataString);
    for (const prop in productData) {
      if (!productData.hasOwnProperty(prop)) {
        continue;
      }
      if (prop === productId || (this.productData === undefined && prop.startsWith(productId.substr(0, 5)))) {
        this.productData = productData[prop];
        this.productData.altName = productData.alternate.replace(/ - {a.*/, '');
      }
    }

    const sizes = this.productData.sizes.map(s => s.sizeCode);
    let availabilityResponse;
    try {
      availabilityResponse = await this.httpService.get(this.getAvailabilityUrl(sizes)).toPromise();
    } catch (e) {
      this.logger.error({
        message: 'failed to request product availability',
        response: e.response ? e.response.data || e.response : '',
      });
      this.logger.error(e.message, e.stack);
      throw new InternalServerErrorException('Unable to fetch availability from API.');
    }
    if (availabilityResponse.data && Array.isArray(availabilityResponse.data.availability)) {
      this.availability = availabilityResponse.data.availability;
      this.lowInStock = availabilityResponse.data.fewPieceLeft;
    } else {
      this.logger.error({ message: 'Unexpected product availability format from API', url, availabilityResponse });
      throw new InternalServerErrorException('Invalid availability format from API.');
    }

  }

  getName(): string {
    return this.productData.altName;
  }

  getPrice(sizeId?: string): number {
    const priceText = this.productData.priceClubValue || this.productData.whitePriceValue;
    return parseFloat(priceText);
  }

  getSizes(): ProductSizeAvailability[] {
    return this.productData.sizes.map(size => ({
      id: size.sizeCode,
      name: size.name,
      isAvailable: this.isSizeAvailable(size.sizeCode),
    }));
  }

  isLowInStock(sizeId?: string): boolean {
    return this.isSizeAvailable(sizeId) && this.lowInStock.indexOf(sizeId) !== -1;
  }

  isInCatalog(): boolean {
    return !!this.productData;
  }

  isSizeAvailable(id?: string): boolean {
    return !!this.availability && this.availability.indexOf(id) !== -1;
  }

  getUrl(): string {
    return this.url;
  }

  private getAvailabilityUrl(sizes: string[]) {
    const variants = sizes.join(',');
    return `https://www2.hm.com/de_de/getAvailability?variants=${variants}`;
  }
}
