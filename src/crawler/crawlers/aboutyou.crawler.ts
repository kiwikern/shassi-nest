import { Crawler } from '../crawler.interface';
import { BadRequestException, HttpService, Injectable, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';

@Injectable()
export class AboutyouCrawler implements Crawler {
  url: string;
  body;
  productId: string;
  logger: Logger = new Logger(AboutyouCrawler.name);

  constructor(private httpService: HttpService) {
  }

  async init(url: string) {
    this.url = url;
    const productIdMatch = /\d+$/.exec(url);
    if (!Array.isArray(productIdMatch)) {
      throw new BadRequestException('URL needs to end with the product id.');
    }
    this.productId = productIdMatch[0];
    const apiUrl = `https://api.aboutyou.de/products/${this.productId}?include=variants.sizes`;
    const response = await this.httpService.get(apiUrl).toPromise();
    this.body = response.data;
  }

  getName(): string {
    return this.body.data.attributes.name;
  }

  getPrice(sizeId): number {
    const size = this.body.included[sizeId];
    if (size) {
      if (size.attributes.campaignPrice.current > 0) {
        return size.attributes.campaignPrice.current / 100;
      }
      return size.attributes.price.current / 100;
    } else {
      this.logger.warn({ message: 'Could not find given size', sizeId, productId: this.productId });
      if (this.body.data.attributes.campaignPrice.min > 0) {
        return this.body.data.attributes.campaignPrice.min / 100;
      }
      return this.body.data.attributes.price.min / 100;
    }
  }

  getSizes(): ProductSizeAvailability[] {
    return Object.keys(this.body.included)
      .filter(key => key.startsWith('variants:'))
      .map(sizeId => {
        const size = this.body.included[sizeId].attributes;
        return {
          id: sizeId,
          isAvailable: size.quantity > 0,
          name: size.sizes.shop + (size.sizes.length ? `/${size.sizes.length}` : ''),
        };
      });

  }

  isInCatalog(): boolean {
    return !this.body.errors && this.body.data.attributes.isActive;
  }

  isSizeAvailable(sizeId?: string): boolean {
    return this.getQuantity(sizeId) > 0;
  }

  isLowInStock(sizeId?: string): boolean {
    return this.isSizeAvailable(sizeId) && this.getQuantity(sizeId) <= 3;
  }

  private getQuantity(sizeId: string) {
    const size = this.body.included[sizeId];
    return !!size && size.attributes.quantity;
  }

  getUrl(): string {
    return this.url;
  }

}
