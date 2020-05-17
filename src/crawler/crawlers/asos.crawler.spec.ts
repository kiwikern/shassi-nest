import { crawlerTestRun } from '../../../test/crawler.testrun';
import { BadRequestException } from '@nestjs/common';
import { asosTestCase } from '../../../test/crawler-testcases/asos-sale.testcase';
import { of } from 'rxjs';
import { AsosCrawler } from './asos.crawler';
import { asosOneSizeTestCase } from '../../../test/crawler-testcases/asos-onesize.testcase';
import { asosOutOfStock } from '../../../test/crawler-testcases/asos-out-of.stock';

const testCases = [asosTestCase, asosOneSizeTestCase, asosOutOfStock];

describe('Asos', () => {
  testCases.forEach(testCase => crawlerTestRun(testCase));

  it('should reject url without product data', async () => {
    const httpService = {
      get: () => of({ data: null }),
    } as any;
    const crawler = new AsosCrawler(httpService);
    try {
      await crawler.init('any url');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
    }
  });
});
