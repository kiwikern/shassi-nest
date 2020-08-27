import { Crawler } from '../crawler.interface';
import { BadRequestException, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import { PuppeteerService } from '../puppeteer/puppeteer.service';

interface HmProductData {
  sizes: [{ sizeCode: string; size: string; name: string }];
  variants: [{ variantCode: string; size: string; sizeName: string }];
  whitePriceValue: string;
  priceClubValue: string;
  priceValue: string;
  priceSaleValue: string;
  redPriceValue: string;
  name: string;
  altName: string;
  title: string;
}

export abstract class CosWeekdayBaseCrawler implements Crawler {
  url: string;
  protected productData: HmProductData;
  private availability = [];
  lowInStock: string[];

  protected abstract logger: Logger;

  constructor(private puppeteerService: PuppeteerService) {}

  async init(url: string) {
    this.url = this.normalizeUrl(url);

    const productIdMatches = /.*\.(\d+)\.html.*/.exec(url);
    if (!productIdMatches || !productIdMatches[1]) {
      this.logger.error('Could not find productId');
      throw new BadRequestException('Invalid url: ' + url);
    }
    const productId = productIdMatches[1];
    const fullProductData = await this.puppeteerService.evaluateInBrowser(
      url,
      () => {
        const appNames = ['cosApp', 'weekdayApp', 'storiesApp'];
        let app;
        for (const appName of appNames) {
          app = window[appName];
          if (app) break;
        }
        // productAvailability only for H&M
        const availabilityData = window['productAvailability'] ?? {
          availability:
            app?.productDetails?.availableVariants ??
            // For Arket
            window['availableVariants'],
          fewPiecesLeft:
            app?.productDetails?.lowInStockVariants ??
            app?.productDet?.lowInStockVariants,
        };

        return {
          productData: window['productArticleDetails'],
          availabilityData,
        };
      },
    );
    this.productData = fullProductData.productData?.[productId];
    if (fullProductData.productData?.alternate) {
      // H&M is missing name attribute, replace color placeholder
      this.productData.altName = fullProductData.productData.alternate?.replace(
        / - {a.*/,
        ` - ${this.productData.name}`,
      );
    }
    const availabilityData = fullProductData.availabilityData;
    this.availability = availabilityData?.availability;
    const fewPieces =
      availabilityData?.fewPiecesLeft ?? availabilityData?.fewPieceLeft;
    if (fewPieces == null) {
      this.logger.warn('Could not detect fewPiecesLeft for ' + url);
    }
    this.lowInStock = fewPieces ?? [];
  }

  getName() {
    return this.productData.title || this.productData.altName;
  }

  getPrice(): number {
    const priceText: string =
      this.productData.priceClubValue ||
      this.productData.priceSaleValue ||
      this.productData.redPriceValue ||
      this.productData.whitePriceValue ||
      this.productData.priceValue;
    return parseFloat(priceText);
  }

  getSizes(): ProductSizeAvailability[] {
    return this.productData.variants.map(v => ({
      id: v.variantCode,
      name: v.sizeName,
      isAvailable: this.isSizeAvailable(v.variantCode),
    }));
  }

  isInCatalog(): boolean {
    return !!this.productData;
  }

  isSizeAvailable(id?: string): boolean {
    return !!this.availability && this.availability.includes(id);
  }

  isLowInStock(sizeId?: string): boolean {
    return this.isSizeAvailable(sizeId) && this.lowInStock.includes(sizeId);
  }

  getUrl(): string {
    return this.url;
  }

  normalizeUrl(url: string): string {
    return url;
  }
}
