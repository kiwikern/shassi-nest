import { crawlerTestRun } from '../../../test/crawler.testrun';
import { cosTestCase } from '../../../test/crawler-testcases/cos.testcase';

const testCases = [cosTestCase];

describe('Cos',
  () => {
    testCases.forEach(testCase => crawlerTestRun(testCase));
  });
