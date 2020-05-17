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
  name: string;
  isInStock: boolean;
  variants: {
    id: string;
    brandSize: string;
    isLowInStock: boolean;
    isInStock: boolean;
    price: { current: { value: number } };
  }[];
}

@Injectable()
export class AsosCrawler implements Crawler {
  private logger: Logger = new Logger(AsosCrawler.name);
  private url: string;
  private apiData: ApiResponse;

  constructor(private httpService: HttpService) {}

  async init(url: string) {
    this.url = url;
    try {
      const productId = /\/prd\/(\d+)/.exec(url)[1];
      const apiUrl = `https://www.asos.com/api/product/catalogue/v3/products/${productId}?store=DE`;
      const apiResponse = await this.httpService.get(apiUrl).toPromise();
      this.apiData = apiResponse.data;
    } catch (e) {
      this.logger.error(
        `Could not parse product data for ${url}, error: ${e.message}`,
        e.stack,
      );
      throw new BadRequestException(
        'The url could not be processed. Was this a proper product url?',
      );
    }
  }

  getName() {
    return this.apiData.name;
  }

  getPrice(sizeId): number {
    const size = this.apiData.variants.find(v => v.id + '' === sizeId);
    if (size) {
      return size.price.current.value;
    } else {
      throw new InternalServerErrorException('Could not find price.');
    }
  }

  getSizes(): ProductSizeAvailability[] {
    return this.apiData.variants.map(v => ({
      id: v.id + '',
      name: this.getSizeName(v.id + ''),
      isAvailable: v.isInStock,
    }));
  }

  private getSizeName(id: string): string {
    const size = this.apiData.variants.find(v => v.id + '' === id);
    if (size) {
      return size.brandSize;
    } else {
      this.logger.warn({
        message: 'No size found for sizeId.',
        url: this.url,
        id,
      });
      return 'NOSIZE';
    }
  }

  isInCatalog(): boolean {
    return !!this.apiData;
  }

  isSizeAvailable(id?: string): boolean {
    const size = this.apiData.variants.find(v => v.id + '' === id);
    return !!size && size.isInStock;
  }

  isLowInStock(sizeId?: string): boolean {
    const size = this.apiData.variants.find(v => v.id + '' === sizeId);
    return this.isSizeAvailable(sizeId) && !!size && size.isLowInStock;
  }

  getUrl(): string {
    return this.url;
  }
}
