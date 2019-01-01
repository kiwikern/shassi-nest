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

const testCases = [
  amazonKindleTaseCase,
  amazonBookTaseCase,
  amazonEchoTaseCase,
  amazonRegularPriceTaseCase,
  amazonDealPriceTaseCase,
];

describe('Amazon',
  () => testCases.forEach(testCase => crawlerTestRun(testCase)),
);
