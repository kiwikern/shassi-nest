import { crawlerTestRun } from '../../../test/crawler.testrun';
import { hmMultiSizesTestCase } from '../../../test/crawler-testcases/hm-multisizes.testcase';
import { hmOneSizeTestCase } from '../../../test/crawler-testcases/hm-onesize.testcase';

const testCases = [hmMultiSizesTestCase, hmOneSizeTestCase];

describe('H&M',
  () => testCases.forEach(testCase => crawlerTestRun(testCase)),
);
