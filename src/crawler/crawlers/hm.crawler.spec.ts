import { crawlerTestRun } from '../../../test/crawler.testrun';
import { hmOneSizeTestCase } from '../../../test/crawler-testcases/hm-onesize.testcase';
import { hmMultisizesTestcase } from '../../../test/crawler-testcases/hm-multisizes.testcase';
import { InternalServerErrorException } from '@nestjs/common';
import { HmCrawler } from './hm.crawler';

const testCases = [hmOneSizeTestCase, hmMultisizesTestcase];

describe('H&M',
  () => {
    testCases.forEach(testCase => crawlerTestRun(testCase));

    it('should reject url without product url', async () => {
      const crawler = new HmCrawler(null);
      try {
        await crawler.init('https://www.hm.com/myproduct');
      } catch (e) {
        expect(e).toBeInstanceOf(InternalServerErrorException);
      }
    });
  });
