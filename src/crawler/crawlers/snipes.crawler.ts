import { Crawler } from '../crawler.interface';
import { BadRequestException, HttpService, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM } from 'jsdom';

@Injectable()
export class SnipesCrawler implements Crawler {
  private logger: Logger = new Logger(SnipesCrawler.name);
  private url: string;
  private productData: { name: string, brand: { name: string }, offers: { price: string, availability: string } };
  private availabilityData: {
    anyAvailableOnline: boolean,
    anyAvailableInAnyStore: boolean,
    variants: [{
      availableOnline: boolean,
      inAnyStore: boolean,
      stock2Show: number,
      variantCode: string,
      size: string,
    }],
  };

  constructor(private httpService: HttpService) {
  }

  async init(url: string) {
    this.url = url;
    const headers = {
      'accept': 'text/html,application/xhtml+xml,application/xmlq=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7',
      'cache-control': 'no-cache',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
    };
    const response = await this.httpService.get(this.url, { headers }).toPromise();
    const document = new JSDOM(response.data).window.document;
    for (const script of document.scripts) {
      if (script.type === 'application/ld+json') {
        const jsonString = script.innerHTML.replace(/\n|\t/g, '');
        this.productData = JSON.parse(jsonString);
        break;
      }
    }
    if (!this.productData) {
      this.logger.error({ message: 'Could not get product data', url });
      throw new InternalServerErrorException('Could not get product json');
    }
    const productId = /\/prod-(\d+)/.exec(url)[1];
    const apiUrl = 'https://m.snipes.com/getProductStock.html?checkStoreStock=true&code=';
    try {
      const apiResponse = await this.httpService.post(apiUrl + productId, {}, { headers }).toPromise();
      this.availabilityData = apiResponse.data;
    } catch (e) {
      this.logger.error(`Could not parse product data for ${url}, error: ${e.message}`, e.stack);
      throw new BadRequestException('The url could not be processed. Was this a proper product url?');
    }
  }

  getName() {
    return `${this.productData.brand.name} ${this.productData.name}`;
  }

  getPrice(sizeId): number {
    return parseFloat(this.productData.offers.price);
  }

  getSizes(): ProductSizeAvailability[] {
    return this.availabilityData.variants
      .map(v => ({
        id: v.variantCode,
        name: v.size,
        isAvailable: v.availableOnline,
      }));
  }

  isInCatalog(): boolean {
    return this.productData
      && this.productData.offers
      && this.productData.offers.availability
      && this.productData.offers.availability.includes('InStock');
  }

  isSizeAvailable(id?: string): boolean {
    const size = this.availabilityData.variants.find(v => v.variantCode === id);
    return !!size && size.availableOnline;
  }

  isLowInStock(sizeId?: string): boolean {
    const size = this.availabilityData.variants.find(v => v.variantCode === sizeId);
    return this.isSizeAvailable(sizeId) && !!size && size.stock2Show < 3;
  }

  getUrl(): string {
    return this.url;
  }

}
