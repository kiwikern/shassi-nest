import { HttpModule, Module } from '@nestjs/common';
import { CrawlerService } from './crawler.service';
import { HmCrawler } from './hm.crawler';
import { AboutyouCrawler } from './aboutyou.crawler';
import { AmazonCrawler } from './amazon.crawler';

@Module({
  providers: [
    CrawlerService,
    HmCrawler,
    AboutyouCrawler,
    AmazonCrawler,
  ],
  imports: [HttpModule],
  exports: [CrawlerService],
})
export class CrawlerModule {
}
