import { crawlerTestRun } from '../../../test/crawler.testrun';
import { BadRequestException } from '@nestjs/common';
import { of } from 'rxjs';
import { storiesTestCase } from '../../../test/crawler-testcases/stories.testcase';
import { StoriesCrawler } from './stories.crawler';
import { storiesOneSizeTestCase } from '../../../test/crawler-testcases/stories-onsize.testcase';
import { storiesNotInCatalogResponse } from '../../../test/crawler-testcases/stories-not-in-catalog.testcase';

const testCases = [storiesTestCase, storiesOneSizeTestCase];

describe('Stories', () => {
  testCases.forEach(testCase => crawlerTestRun(testCase));

  it('should reject url without product data', async () => {
    const httpService = {
      get: () => of({ data: null }),
    } as any;
    const crawler = new StoriesCrawler(httpService);
    try {
      await crawler.init('any url');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
    }
  });

  it('should parse product which is not in catalog', async () => {
    const httpService = {
      get: () => of({ data: storiesNotInCatalogResponse }),
    } as any;
    const crawler = new StoriesCrawler(httpService);
    await crawler.init(
      'https://www.stories.com/en_eur/sale/all-sale/product.straight-stretch-jeans-light-blue.0473776005.html',
    );
    expect(crawler.isInCatalog()).toBe(false);
  });
});
