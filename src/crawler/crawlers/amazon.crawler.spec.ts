/* tslint:disable:max-line-length */
/* tslint:disable:no-trailing-whitespace */
import { crawlerTestRun } from '../../../test/crawler.testrun';
import { AboutyouCrawler } from './aboutyou.crawler';
import { AmazonCrawler } from './amazon.crawler';
import { amazonKindleTaseCase } from '../../../test/crawler-testcases/amazon-kindle.tastcase';
import { amazonBookTaseCase } from '../../../test/crawler-testcases/amazon-book.tastcase';
import { amazonEchoTaseCase } from '../../../test/crawler-testcases/amazon-echo.tastcase';
import { amazonRegularPriceTaseCase } from '../../../test/crawler-testcases/amazon-regular-price.tastcase';
import { amazonDealPriceTaseCase } from '../../../test/crawler-testcases/amazon-echo.dealprice';
import { HmCrawler } from './hm.crawler';
import { InternalServerErrorException } from '@nestjs/common';
import { of } from 'rxjs';

const testCases = [
  amazonKindleTaseCase,
  amazonBookTaseCase,
  amazonEchoTaseCase,
  amazonRegularPriceTaseCase,
  amazonDealPriceTaseCase,
];

describe('Amazon',
  () => {
    testCases.forEach(testCase => crawlerTestRun(testCase));

    it('should throw when no price is found', async () => {
      const httpMock = jest.fn(() => ({
        get: jest.fn(),
      }))();
      httpMock.get.mockReturnValueOnce(of({data: '<html></html>'}));
      const crawler = new AmazonCrawler(httpMock as any);
      await crawler.init('https://www.amazon.de/0594303002.html');
      expect(() => crawler.getPrice())
        .toThrow(InternalServerErrorException);
      expect(httpMock.get).toHaveBeenCalledTimes(1);
    });
  });
