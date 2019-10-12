import { Crawler } from '../crawler.interface';
import { HttpService, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM } from 'jsdom';

@Injectable()
export class SnipesCrawler implements Crawler {
  private logger: Logger = new Logger(SnipesCrawler.name);
  private url: string;
  private productData: { name: string, brand: { name: string }, offers: { price: string, availability: string } };
  private availabilityData: Array<{
    id: string,
    displayValue: string,
    isOrderable: boolean,
  }> = [];

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
    if (document.getElementsByClassName('b-pdp-one-size-label').length > 0) {
      this.availabilityData.push({id: 'one size', displayValue: 'one size', isOrderable: true});
    }
    const sizeElements = document.getElementsByClassName('b-swatch-value-wrapper');
    for (const sizeElement of sizeElements) {
      const innerSizeElement = sizeElement.querySelector('span');
      const sizeName = innerSizeElement.getAttribute('data-attr-value');
      const isOrderable = innerSizeElement.classList.contains('b-swatch-value--orderable');
      this.availabilityData.push({id: sizeName, displayValue: sizeName, isOrderable});
    }
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
  }

  getName() {
    return `${this.productData.brand.name} ${this.productData.name}`;
  }

  getPrice(sizeId): number {
    return parseFloat(this.productData.offers.price);
  }

  getSizes(): ProductSizeAvailability[] {
    return this.availabilityData.map(v => ({
        id: v.id,
        name: v.displayValue,
        isAvailable: v.isOrderable,
      }));
  }

  isInCatalog(): boolean {
    return this.productData
      && this.productData.offers
      && this.productData.offers.availability
      && this.productData.offers.availability.includes('InStock');
  }

  isSizeAvailable(id?: string): boolean {
    const size = this.availabilityData.find(v => v.id === id);
    return !!size && size.isOrderable;
  }

  isLowInStock(sizeId?: string): boolean {
    return false;
  }

  getUrl(): string {
    return this.url;
  }

}
