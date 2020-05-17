import { Crawler } from '../crawler.interface';
import {
  BadRequestException,
  HttpService,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';

interface ApiResponse {
  isActive: boolean;
  isSoldOut: boolean;
  isNew: boolean;
  attributes: {
    name: { values: { label: string } };
    brand: { values: { label: string } };
  };
  variants: {
    id: number;
    /** price in cents */
    price: { withTax: number };
    stock: { quantity: number };
    attributes: {
      shopSize: { values: { label: string } };
      length?: { values: { label: string } };
    };
  }[];
}

@Injectable()
export class AboutyouCrawler implements Crawler {
  url: string;
  body: ApiResponse;
  productId: string;
  logger: Logger = new Logger(AboutyouCrawler.name);

  constructor(private httpService: HttpService) {}

  async init(url: string) {
    this.url = url;
    const productIdMatch = /\d+$/.exec(url);
    if (!Array.isArray(productIdMatch)) {
      throw new BadRequestException('URL needs to end with the product id.');
    }
    this.productId = productIdMatch[0];
    const apiUrl = `https://api-cloud.aboutyou.de/v1/products?ids=${this.productId}&with=attributes%3Akey%28brand%7CbrandLogo%7Cname%7CquantityPerPack%7CplusSize%7CcolorDetail%29%2Cvariants%2Cvariants.attributes%3Akey%28shopSize%7CcategoryShopFilterSizes%7Ccup%7Ccupsize%7CvendorSize%7Clength%7Cdimension3%7CsizeType%7Csort%29`;
    const response = await this.httpService.get(apiUrl).toPromise();
    this.body = response.data.entities[0];
  }

  getName(): string {
    return [
      this.body.attributes.brand.values.label,
      this.body.attributes.name.values.label,
    ].join(' - ');
  }

  getPrice(sizeId): number {
    const size = this.body.variants.find(v => v.id + '' === sizeId);
    if (size) {
      return size.price.withTax / 100;
    } else {
      this.logger.warn({
        message: 'Could not find given size',
        sizeId,
        productId: this.productId,
      });
      throw new InternalServerErrorException(
        'Could not find price for variant',
      );
    }
  }

  getSizes(): ProductSizeAvailability[] {
    return this.body.variants.map(v => ({
      id: v.id + '',
      isAvailable: v.stock.quantity > 0,
      name:
        v.attributes.shopSize.values.label +
        (v.attributes.length ? '/' + v.attributes.length.values.label : ''),
    }));
  }

  isInCatalog(): boolean {
    return !this.body || this.body.isActive;
  }

  isSizeAvailable(sizeId?: string): boolean {
    return this.getQuantity(sizeId) > 0;
  }

  isLowInStock(sizeId?: string): boolean {
    return this.isSizeAvailable(sizeId) && this.getQuantity(sizeId) <= 3;
  }

  private getQuantity(sizeId: string) {
    const size = this.body.variants.find(v => v.id + '' === sizeId);
    return !!size && size.stock.quantity;
  }

  getUrl(): string {
    return this.url;
  }
}
