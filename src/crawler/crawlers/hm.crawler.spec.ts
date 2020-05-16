import { crawlerTestRun } from '../../../test/crawler.testrun';
import { hmOneSizeTestCase } from '../../../test/crawler-testcases/hm-onesize.testcase';
import { hmMultisizesTestcase } from '../../../test/crawler-testcases/hm-multisizes.testcase';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { HmCrawler } from './hm.crawler';
import { hmMultiVariantsTestcase } from '../../../test/crawler-testcases/hm-multivariants.testcase';
import { of } from 'rxjs';
import { hmClubPriceTestcase } from '../../../test/crawler-testcases/hm-clubprice.testcase';

const testCases = [
  hmOneSizeTestCase,
  hmMultisizesTestcase,
  hmMultiVariantsTestcase,
  hmClubPriceTestcase,
];

describe('H&M', () => {
  testCases.forEach(testCase => crawlerTestRun(testCase));

  it('should handle a failing request', async () => {
    const httpMock = jest.fn(() => ({
      get: jest.fn(),
    }))();
    httpMock.get.mockImplementationOnce(() => {
      throw new Error('');
    });
    const crawler = new HmCrawler(httpMock as any);
    await expect(
      crawler.init('https://www2.hm.com/de_de/productpage.0594303002.html'),
    ).rejects.toThrow(InternalServerErrorException);
    expect(httpMock.get).toHaveBeenCalledTimes(1);
  });

  it('should throw on faulty product response', async () => {
    const httpMock = jest.fn(() => ({
      get: jest.fn(),
    }))();
    // noinspection all
    httpMock.get.mockReturnValueOnce(
      of({
        data: `
      <div class="product parbase">
        <script>
            var productArticleDetails = {
              "0594303002": {"sizes": []},
              "alternate": "";
            }
        </script>
      </div>
      `,
      }),
    );
    const crawler = new HmCrawler(httpMock as any);
    await expect(
      crawler.init('https://www2.hm.com/de_de/productpage.0594303002.html'),
    ).rejects.toThrow(BadRequestException);
    expect(httpMock.get).toHaveBeenCalledTimes(1);
  });

  it('should throw on faulty availability response', async () => {
    const httpMock = jest.fn(() => ({
      get: jest.fn(),
    }))();
    // noinspection all
    httpMock.get.mockReturnValueOnce(
      of({
        data: `
      <div class="product parbase">
        <script>
            var productArticleDetails = {
              "0594303002": {"sizes": []},
              "alternate": ""
            }
        </script>
      </div>
      `,
      }),
    );
    httpMock.get.mockImplementationOnce(() => {
      throw new Error('');
    });
    const crawler = new HmCrawler(httpMock as any);
    await expect(
      crawler.init('https://www2.hm.com/de_de/productpage.0594303002.html'),
    ).rejects.toThrow(InternalServerErrorException);
    expect(httpMock.get).toHaveBeenCalledTimes(2);
  });

  it('should throw on faulty availability format', async () => {
    const httpMock = jest.fn(() => ({
      get: jest.fn(),
    }))();
    (Object.prototype as any).customProp = 'fortest';
    // noinspection all
    httpMock.get.mockReturnValueOnce(
      of({
        data: `
      <div class="product parbase">
        <script>
            var productArticleDetails = {
              "0594303002": {"sizes": []},
              "alternate": ""
            }
        </script>
      </div>
      `,
      }),
    );
    httpMock.get.mockReturnValueOnce(
      of({ data: { availability: 'no-array' } }),
    );
    const crawler = new HmCrawler(httpMock as any);
    await expect(
      crawler.init('https://www2.hm.com/de_de/productpage.0594303002.html'),
    ).rejects.toThrow(InternalServerErrorException);
    delete (Object.prototype as any).customProp;
    expect(httpMock.get).toHaveBeenCalledTimes(2);
  });

  it('should reject old api url', async () => {
    const crawler = new HmCrawler(null);
    try {
      await crawler.init('https://www.hm.com/myproduct');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
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
