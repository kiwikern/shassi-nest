import { Crawler } from '../crawler.interface';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { PuppeteerService } from '../puppeteer/puppeteer.service';

@Injectable()
export class ZalandoCrawler implements Crawler {
  logger: Logger = new Logger(ZalandoCrawler.name);
  url: string;
  articleData;

  constructor(private puppeteerService: PuppeteerService) {}

  async init(url: string) {
    this.url = url;
    try {
      const productProperties: string = await this.puppeteerService.evaluateInBrowser(
        url,
        () => document.getElementById('z-vegas-pdp-props')?.innerHTML,
      );
      if (!productProperties) {
        this.logger.error('Product not found');
        throw new NotFoundException('No product');
      }

      const jsonString = productProperties
        .replace('<![CDATA[', '')
        .replace(']]>', '');
      this.articleData = JSON.parse(jsonString).model.articleInfo;
    } catch (error) {
      throw new InternalServerErrorException(
        { error },
        'Could not request or parse product data',
      );
    }
  }

  getName(): string {
    return this.articleData.name;
  }

  getPrice(sizeId: string): number {
    const size = this.articleData.units.find(u => u.id === sizeId);
    if (size) {
      return size.price.value;
    } else {
      this.logger.warn({
        message: 'Could not find given size',
        sizeId,
        url: this.url,
      });
      return this.articleData.displayPrice.price.value;
    }
  }

  getSizes(): ProductSizeAvailability[] {
    return this.articleData.units.map(unit => {
      return {
        id: unit.id,
        isAvailable: unit.stock > 0,
        name: unit.size.local,
      };
    });
  }

  isInCatalog(): boolean {
    return this.articleData.active;
  }

  isSizeAvailable(sizeId?: string): boolean {
    const size = this.getSizes().find(s => s.id === sizeId);
    return !!size && size.isAvailable;
  }

  isLowInStock(sizeId?: string): boolean {
    const size = this.articleData.units.find(unit => unit.id === sizeId);
    return this.isSizeAvailable(sizeId) && !!size && size.stock <= 3;
  }

  getUrl(): string {
    return this.url;
  }
}
