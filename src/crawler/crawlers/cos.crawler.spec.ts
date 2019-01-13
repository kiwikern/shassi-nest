import { crawlerTestRun } from '../../../test/crawler.testrun';
import { cosTestCase } from '../../../test/crawler-testcases/cos.testcase';
import { cosOneSizeTestCase } from '../../../test/crawler-testcases/cos-onesize.testcase';

const testCases = [cosTestCase, cosOneSizeTestCase];

describe('Cos',
  () => {
    testCases.forEach(testCase => crawlerTestRun(testCase));
  });
