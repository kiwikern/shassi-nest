import { crawlerTestRun } from '../../../test/crawler.testrun';
import { hmOneSizeTestCase } from '../../../test/crawler-testcases/hm-onesize.testcase';
import { hmMultisizesTestcase } from '../../../test/crawler-testcases/hm-multisizes.testcase';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { HmCrawler } from './hm.crawler';
import { hmNoAvailabilityDataTestcase } from '../../../test/crawler-testcases/hm-noavailabilitydata.testcase';
import { hmMultiVariantsTestcase } from '../../../test/crawler-testcases/hm-multivariants.testcase';

const testCases = [hmOneSizeTestCase, hmMultisizesTestcase, hmNoAvailabilityDataTestcase, hmMultiVariantsTestcase];

describe('H&M',
  () => {
    testCases.forEach(testCase => crawlerTestRun(testCase));

    it('should reject old api url', async () => {
      const crawler = new HmCrawler(null);
      try {
        await crawler.init('https://www.hm.com/myproduct');
      } catch (e) {
        expect(e).toBeInstanceOf(InternalServerErrorException);
      }
    });

    it('should reject product url without id', async () => {
      const crawler = new HmCrawler(null);
      try {
        await crawler.init('https://www2.hm.com/myproduct');
      } catch (e) {
        expect(e).toBeInstanceOf(BadRequestException);
      }
    });
  });
