import { Crawler } from '../crawler.interface';
import { HttpService, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { JSDOM } from 'jsdom';

@Injectable()
export class AmazonCrawler implements Crawler {
  url: string;
  document: Document;
  logger: Logger = new Logger(AmazonCrawler.name);

  constructor(private httpService: HttpService) {
  }

  async init(url: string) {
    this.url = url;
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Cookie': 'HMCORP_locale=de_DE;HMCORP_currency=EUR;',
    };
    const response = await this.httpService.get(this.url, {headers}).toPromise();
    this.document = new JSDOM(response.data).window.document;
  }

  getName() {
    const ebookTitle = this.document.getElementById('ebooksProductTitle');
    if (ebookTitle) {
      return ebookTitle.innerHTML.trim();
    }

    return this.document.getElementById('productTitle')
      .innerHTML
      .trim();
  }

  getPrice(): number {
    const kindlePrice = this.document.getElementsByClassName('kindle-price');
    if (kindlePrice && kindlePrice[0]) {
      const price = this.formatPrice(kindlePrice[0].innerHTML);
      if (price) {
        return price;
      }
    }

    const offerPrice = this.document.getElementsByClassName('offer-price');
    if (offerPrice && offerPrice[0]) {
      const price = this.formatPrice(offerPrice[0].innerHTML);
      if (price) {
        return price;
      }
    }

    const salePrice = this.document.getElementById('priceblock_saleprice');
    if (salePrice) {
      const price = this.formatPrice(salePrice.innerHTML);
      if (price) {
        return price;
      }
    }

    const dealPrice = this.document.getElementById('priceblock_dealprice');
    if (dealPrice) {
      const price = this.formatPrice(dealPrice.innerHTML);
      if (price) {
        return price;
      }
    }

    const regularPrice = this.document.getElementById('priceblock_ourprice');
    if (regularPrice) {
      const price = this.formatPrice(regularPrice.innerHTML);
      if (price) {
        return price;
      }
    }
    this.logger.error('Could not find price for product: ' + this.url);
    throw new InternalServerErrorException('Could not determine Amazon price');
  }

  getSizes(): ProductSizeAvailability[] {
    return [{ id: 'ONESIZE', name: 'ONESIZE', isAvailable: true }];
  }

  isInCatalog(): boolean {
    const availabilityDiv = this.document.getElementById('availability');
    return !availabilityDiv || !availabilityDiv.innerHTML.includes('Derzeit nicht verfügbar');
  }

  isSizeAvailable(id?: string): boolean {
    return true;
  }

  getUrl(): string {
    return this.url;
  }

  private formatPrice(text) {
    const matches = /EUR (\d+,\d+)/.exec(text);
    if (matches && matches[1]) {
      return Number.parseFloat(matches[1].replace(',', '.'));
    }
  }

}
