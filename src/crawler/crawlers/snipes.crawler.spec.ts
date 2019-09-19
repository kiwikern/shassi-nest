import { crawlerTestRun } from '../../../test/crawler.testrun';
import { of } from 'rxjs';
import { snipesNoSaleTestCase } from '../../../test/crawler-testcases/snipes-nosale.testcase';
import { snipesSaleTestCase } from '../../../test/crawler-testcases/snipes-sale.testcase';
import { snipesOneSizeTestCase } from '../../../test/crawler-testcases/snipes-onesize.testcase';
import { SnipesCrawler } from './snipes.crawler';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';

const testCases = [snipesNoSaleTestCase, snipesSaleTestCase, snipesOneSizeTestCase];

describe('Snipes',
  () => {
    testCases.forEach(testCase => crawlerTestRun(testCase));

    it('should reject url without product data', async () => {
      const httpService = {
        get: () => of({ data: null }),
      } as any;
      const crawler = new SnipesCrawler(httpService);
      try {
        await crawler.init('any url');
      } catch (e) {
        expect(e).toBeInstanceOf(InternalServerErrorException);
      }
    });

    it('should throw on faulty availability response', async () => {
      const httpMock = jest.fn(() => ({
        get: jest.fn(),
      }))();
      httpMock.get.mockReturnValueOnce(of({
        data: `
        <script type="application/ld+json">
            {}
        </script>
      `,
      }));
      httpMock.get.mockImplementationOnce(() => {
        throw new Error('');
      });
      const crawler = new SnipesCrawler(httpMock as any);
      await expect(crawler.init('https://m.snipes.com/accessoires/nike/elemental-graphic-black-black-white/prod-00013801571016'))
        .rejects
        .toThrow(BadRequestException);
      expect(httpMock.get).toHaveBeenCalledTimes(2);
    });

  });
