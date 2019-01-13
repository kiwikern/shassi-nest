import { crawlerTestRun } from '../../../test/crawler.testrun';
import { cosTestCase } from '../../../test/crawler-testcases/cos-nosale.testcase';
import { cosOneSizeTestCase } from '../../../test/crawler-testcases/cos-onesize.testcase';
import { BadRequestException } from '@nestjs/common';
import { CosCrawler } from './cos.crawler';
import { of } from 'rxjs';

const testCases = [cosTestCase, cosOneSizeTestCase];

describe('Cos',
  () => {
    testCases.forEach(testCase => crawlerTestRun(testCase));

    it('should reject url without product data', async () => {
      const httpService = {
        get: () => of({ data: null }),
      } as any;
      const crawler = new CosCrawler(httpService);
      try {
        await crawler.init('any url');
      } catch (e) {
        expect(e).toBeInstanceOf(BadRequestException);
      }
    });
  });
