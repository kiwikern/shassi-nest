import { crawlerTestRun } from '../../../test/crawler.testrun';
import { weekdayTestCase } from '../../../test/crawler-testcases/weekday-sale.testcase';
import { weekdayOneSizeTestCase } from '../../../test/crawler-testcases/weekday-onesize.testcase';

const testCases = [weekdayTestCase, weekdayOneSizeTestCase];

describe('Weekday',
  () => {
    testCases.forEach(testCase => crawlerTestRun(testCase));
  });
