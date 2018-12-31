import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerService } from './crawler.service';
import { HmCrawler } from './hm.crawler';
import { AboutyouCrawler } from './aboutyou.crawler';
import { AmazonCrawler } from './amazon.crawler';

class CrawlerMock {
}

describe('CrawlerService', () => {
  let service: CrawlerService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CrawlerService,
        { provide: HmCrawler, useClass: CrawlerMock },
        { provide: AboutyouCrawler, useClass: CrawlerMock },
        { provide: AmazonCrawler, useClass: CrawlerMock },
      ],
    }).compile();
    service = module.get<CrawlerService>(CrawlerService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
