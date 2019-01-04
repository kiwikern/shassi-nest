import { crawlerTestRun } from '../../../test/crawler.testrun';
import { hmMultiSizesTestCase } from '../../../test/crawler-testcases/hm-multisizes.testcase';
import { hmOneSizeTestCase } from '../../../test/crawler-testcases/hm-onesize.testcase';
import { hmApiDataTestCase } from '../../../test/crawler-testcases/hm-apidata.testcase';

const testCases = [hmMultiSizesTestCase, hmOneSizeTestCase, hmApiDataTestCase];

describe('H&M',
  () => testCases.forEach(testCase => crawlerTestRun(testCase)),
);
