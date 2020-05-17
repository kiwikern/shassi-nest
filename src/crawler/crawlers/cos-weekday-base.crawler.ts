import { Crawler } from '../crawler.interface';
import { BadRequestException, Logger } from '@nestjs/common';
import { ProductSizeAvailability } from '../product-size.interface';
import * as puppeteer from 'puppeteer';

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

  async init(url: string) {
    this.url = this.normalizeUrl(url);

    const productIdMatches = /.*\.(\d+)\.html.*/.exec(url);
    if (!productIdMatches || !productIdMatches[1]) {
      this.logger.error('Could not find productId');
      throw new BadRequestException('Invalid url: ' + url);
    }
    const productId = productIdMatches[1];
    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      headless: false,
    });
    try {
      const page = await browser.newPage();
      await page.goto(url);
      const fullProductData = await page.evaluate(
        () => window['productArticleDetails'],
      );
      this.productData = fullProductData[productId];
      if (fullProductData.alternate) {
        // H&M is missing name attribute, replace color placeholder
        this.productData.altName = fullProductData.alternate.replace(
          / - {a.*/,
          ` - ${this.productData.name}`,
        );
      }
      const availabilityData = await page.evaluate(
        () => window['productAvailability'],
      );
      this.availability = availabilityData?.availability;
      this.lowInStock = availabilityData?.fewPieceLeft;
    } finally {
      await browser.close();
    }
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

  normalizeUrl(url): string {
    return url;
  }
}
