import { crawlerTestRun } from '../../../test/crawler.testrun';
import { BadRequestException } from '@nestjs/common';
import { of } from 'rxjs';
import { storiesTestCase } from '../../../test/crawler-testcases/stories.testcase';
import { StoriesCrawler } from './stories.crawler';
import { storiesOneSizeTestCase } from '../../../test/crawler-testcases/stories-onsize.testcase';

const testCases = [storiesTestCase, storiesOneSizeTestCase];

describe('Stories',
  () => {
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
  });
