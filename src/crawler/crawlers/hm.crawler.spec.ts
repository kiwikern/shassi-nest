import { crawlerTestRun } from '../../../test/crawler.testrun';
import { hmOneSizeTestCase } from '../../../test/crawler-testcases/hm-onesize.testcase';
import { hmMultisizesTestcase } from '../../../test/crawler-testcases/hm-multisizes.testcase';

const testCases = [hmOneSizeTestCase, hmMultisizesTestcase];

describe('H&M',
  () => testCases.forEach(testCase => crawlerTestRun(testCase)),
);
