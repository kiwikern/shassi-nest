import { ProductSizeAvailability } from '../src/crawler/product-size.interface';
import { Observable, of } from 'rxjs';
import { Crawler } from '../src/crawler/crawler.interface';
import { Type } from '@nestjs/common';

export const crawlerTestRun = ({ crawlerType, testResponse, sizes, sizeChecks, name, priceChecks, url = 'my-url', secondResponse = null }: {
  crawlerType: Type<Crawler>,
  testResponse: string | object,
  sizes: ProductSizeAvailability[],
  sizeChecks: Array<{ size: string; isAvailable: boolean }>,
  name: string, priceChecks: Array<{ size: string; price: number }>,
  url?: string,
  secondResponse?: string | object,
}) => {

  class HttpServiceMock {
    calls = 0;

    get(): Observable<any> {
      this.calls++;
      if (this.calls === 1) {
        return of({ data: testResponse });
      } else {
        return of({ data: secondResponse });
      }
    }
  }

  describe(name, () => {
    let crawler: Crawler;

    beforeAll(async () => {
      crawler = new crawlerType(new HttpServiceMock());
      await crawler.init(url);
    });

    it('should parse the sizes and their availability', async () => {
      expect(crawler.getSizes()).toEqual(sizes);
    });

    sizeChecks.forEach(sizeCheck => {
      it('should return if a size is available', async () => {
        expect(crawler.isSizeAvailable(sizeCheck.size)).toBe(sizeCheck.isAvailable);
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
      expect(crawler.getUrl()).toEqual(url);
    });

    it('should check if product is in catalog', async () => {
      expect(crawler.isInCatalog()).toEqual(true);
    });

  });
};
