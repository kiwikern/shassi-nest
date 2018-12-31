import { ProductSizeAvailability } from './product-size.interface';

export interface Crawler {
  init(url): Promise<any>;

  getSizes(): ProductSizeAvailability[];

  isInCatalog(): boolean;

  isSizeAvailable(sizeId?: string): boolean;

  getPrice(sizeId?: string): number;

  getName(): string;

  getUrl(): string;
}
