import { ProductSizeAvailability } from '../src/crawler/product-size.interface';
import { Observable, of } from 'rxjs';
import { Crawler } from '../src/crawler/crawler.interface';
import { Logger, Type } from '@nestjs/common';
import { NoOpLogger } from './mocks/no-op-logger';

export const crawlerTestRun = (
  {
    crawlerType,
    testResponse,
    sizes,
    sizeChecks,
    name,
    priceChecks,
    url = 'my-url',
    expectedUrl = null,
    secondResponse = null,
    thirdResponse = null,
  }: {
    crawlerType: Type<Crawler>,
    testResponse: string | object,
    sizes: ProductSizeAvailability[],
    sizeChecks: Array<{
      isLowInStock: boolean;
      size: string; isAvailable: boolean
    }>,
    name: string, priceChecks: Array<{ size: string; price: number }>,
    url?: string,
    expectedUrl?: string,
    secondResponse?: string | object,
    thirdResponse?: string | object,
  }) => {

  class HttpServiceMock {
    calls = 0;

    get(): Observable<any> {
      this.calls++;
      if (this.calls === 1 && testResponse) {
        return of({ data: testResponse });
      } else if (this.calls === 2 && secondResponse) {
        return of({ data: secondResponse });
      } else if (this.calls === 3 && thirdResponse) {
        return of({ data: thirdResponse });
      } else {
        throw new Error(`Unexpected http request (request number ${this.calls})`);
      }
    }

    post(): Observable<any> {
      return of({ data: secondResponse });
    }
  }

  describe(name, () => {
    let crawler: Crawler;

    beforeAll(async () => {
      crawler = new crawlerType(new HttpServiceMock());
      Logger.overrideLogger(new NoOpLogger());
      await crawler.init(url);
    });

    it('should parse the sizes and their availability', async () => {
      expect(crawler.getSizes()).toEqual(sizes);
    });

    sizeChecks.forEach(sizeCheck => {
      it('should return if a size is available', async () => {
        expect(crawler.isSizeAvailable(sizeCheck.size)).toBe(sizeCheck.isAvailable);
        expect(crawler.isLowInStock(sizeCheck.size)).toBe(sizeCheck.isLowInStock);
      });
    });

    it('should parse the name', async () => {
      expect(crawler.getName()).toEqual(name);
    });

    priceChecks.forEach(priceCheck => {
      it('should parse the price', async () => {
        expect(crawler.getPrice(priceCheck.size)).toEqual(priceCheck.price);
      });
    });

    it('should return the url', async () => {
      expect(crawler.getUrl()).toEqual(expectedUrl || url);
    });

    it('should check if product is in catalog', async () => {
      expect(crawler.isInCatalog()).toEqual(true);
    });
  });
};
