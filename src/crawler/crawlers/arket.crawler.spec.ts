import { crawlerTestRun } from '../../../test/crawler.testrun';
import { BadRequestException } from '@nestjs/common';
import { of } from 'rxjs';
import { ArketCrawler } from './arket.crawler';
import { arketOneSizeTestCase } from '../../../test/crawler-testcases/arket-onesize.testcase';
import { arketNoSaleTestCase } from '../../../test/crawler-testcases/arket-nosale.testcase';

const testCases = [arketNoSaleTestCase, arketOneSizeTestCase];

describe('Arket', () => {
  testCases.forEach(testCase => crawlerTestRun(testCase));

  it('should reject url without product data', async () => {
    const httpService = {
      get: () => of({ data: null }),
    } as any;
    const crawler = new ArketCrawler(httpService);
    try {
      await crawler.init('any url');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
    }
  });
});
