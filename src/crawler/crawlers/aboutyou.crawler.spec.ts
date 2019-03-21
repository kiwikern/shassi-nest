import { crawlerTestRun } from '../../../test/crawler.testrun';
import { AboutyouCrawler } from './aboutyou.crawler';
import { BadRequestException } from '@nestjs/common';
import { aboutyouTestCase } from '../../../test/crawler-testcases/aboutyou.testcase';
import { aboutyouExtrasaleTestCase } from '../../../test/crawler-testcases/aboutyou-extrasale.testcase';
import { aboutyouSizeWithLengthTestCase } from '../../../test/crawler-testcases/aboutyou-size-with-length.testcase';

const testCases = [aboutyouTestCase, aboutyouExtrasaleTestCase, aboutyouSizeWithLengthTestCase];

describe('Aboutyou',
  () => {
    testCases.forEach(testCase => crawlerTestRun(testCase));

    it('should reject url without product url', async () => {
      const crawler = new AboutyouCrawler(null);
      try {
        await crawler.init('invalid url');
      } catch (e) {
        expect(e).toBeInstanceOf(BadRequestException);
      }
    });
  });
