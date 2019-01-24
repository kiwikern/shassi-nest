import { Crawler } from '../crawler.interface';
import { BadRequestException, HttpService, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM, VirtualConsole } from 'jsdom';

interface HmProductData {
  description: string;
  name: string;
  product_info: {
    price: string;
    availability: boolean;
  };
}

@Injectable()
export class HmCrawler implements Crawler {
  url: string;
  apiData: HmProductData;
  productData: { sizes: [{ sizeCode: string, size: string, name: string }], whitePriceValue: string, altName: string };
  document: Document;
  availability: string[];
  logger: Logger = new Logger(HmCrawler.name);

  constructor(private httpService: HttpService) {
  }

  async init(url: string) {
    if (!url.includes('www2.')) {
      // TODO: Get redirect url and continue with that.
      throw new InternalServerErrorException('Not yet implemented');
    }
    this.url = url;

    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Cookie': 'HMCORP_locale=de_DE;HMCORP_currency=EUR;',
    };
    const response = await this.httpService.get(this.url, { headers }).toPromise();
    const virtualConsole = new VirtualConsole();
    virtualConsole.on('error', (...data) => null);
    this.document = new JSDOM(response.data, {virtualConsole}).window.document;

    const productDataString = this.document.getElementsByClassName('product parbase')[0]
      .getElementsByTagName('script')[0].innerHTML
      .replace(/\n/g, '')
      .replace(/'/g, '"')
      .replace(/isDesktop \? ".*" :/g, '')
      .replace(/var.*productArticleDetails = /, '')
      // trailing slashes
      .replace(/\/$/gm, ',')
      // trailing commas
      .replace(/\,(?!\s*?[\{\[\"\'\w])/g, '')
      .replace(/;$/, '');

    const productIdMatches = /.*\.(\d+)\.html.*/.exec(url);
    if (!productIdMatches || !productIdMatches[1]) {
      this.logger.error('Could not find productId');
      throw new BadRequestException('Invalid url: ' + url);
    }
    const productId = productIdMatches[1];

    const productData = JSON.parse(productDataString);
    for (const prop in productData) {
      if (!productData.hasOwnProperty(prop)) {
        continue;
      }
      if (prop.startsWith(productId.substr(0, 5))) {
        this.productData = productData[prop];
        const altName = productData.alternate.replace(/ - {a.*/, '');
        this.productData.altName = altName;
        break;
      }
    }

    const apiResponse = await this.httpService.get(this.getApiUrl(productId)).toPromise();
    if (apiResponse.data && apiResponse.data.data && apiResponse.data.metaData && apiResponse.data.metaData.code === 200) {
      this.apiData = apiResponse.data.data;
    } else {
      this.logger.warn({ message: 'Could not fetch product data from api', url });
    }

    const sizes = this.productData.sizes.map(s => s.sizeCode);
    const availabilityResponse = await this.httpService.get(this.getAvailabilityUrl(sizes)).toPromise();
    if (availabilityResponse.data && availabilityResponse.data.availability) {
      this.availability = availabilityResponse.data.availability;
    } else {
      this.logger.warn({ message: 'Could not fetch product availability from api', url });
    }

  }

  getName(): string {
    return this.apiData ? this.apiData.name : this.productData.altName;
  }

  getPrice(sizeId?: string): number {
    const priceText = this.apiData ? this.apiData.product_info.price : this.productData.whitePriceValue;
    return parseFloat(priceText);
  }

  getSizes(): ProductSizeAvailability[] {
    return this.productData.sizes.map(size => ({
      id: size.sizeCode,
      name: size.name,
      isAvailable: this.availability.indexOf(size.sizeCode) !== -1,
    }));
  }

  isInCatalog(): boolean {
    return !!this.apiData || !!this.productData;
  }

  isSizeAvailable(id?: string): boolean {
    return !!this.availability && this.availability.indexOf(id) !== -1;
    }

  getUrl(): string {
    return this.url;
  }

  private getApiUrl(productId): string {
    const baseUrl = `https://photorankapi-a.akamaihd.net`;
    const authToken = `b4169ec57e5e6ce3595c6a4041ad2cd2dcd77a5c3b32348e066525fa7efe2d92`;
    return `${baseUrl}/customers/218792/streams/bytag/${productId}/?version=v2.2&auth_token=${authToken}`;
  }

  private getAvailabilityUrl(sizes: string[]) {
    const variants = sizes.join(',');
    return `https://www2.hm.com/de_de/getAvailability?variants=${variants}`;
  }
}
