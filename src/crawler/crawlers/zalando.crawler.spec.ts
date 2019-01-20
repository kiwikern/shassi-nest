import { crawlerTestRun } from '../../../test/crawler.testrun';
import { zalandoTestCase } from '../../../test/crawler-testcases/zalando.testcase';
import { zalandoOneSizeTestCase } from '../../../test/crawler-testcases/zalando-onesize.testcase';

const testCases = [zalandoTestCase, zalandoOneSizeTestCase];

describe('Zalando',
  () => {
    testCases.forEach(testCase => crawlerTestRun(testCase));
  });
