import { HttpModule, Module } from '@nestjs/common';
import { CrawlerService } from './crawler.service';
import { HmCrawler } from './crawlers/hm.crawler';
import { AboutyouCrawler } from './crawlers/aboutyou.crawler';
import { AmazonCrawler } from './crawlers/amazon.crawler';
import { CosCrawler } from './crawlers/cos.crawler';
import { WeekdayCrawler } from './crawlers/weekday.crawler';
import { AsosCrawler } from './crawlers/asos.crawler';

@Module({
  providers: [
    CrawlerService,
    HmCrawler,
    AboutyouCrawler,
    AmazonCrawler,
    CosCrawler,
    WeekdayCrawler,
    AsosCrawler,
  ],
  imports: [HttpModule],
  exports: [CrawlerService],
})
export class CrawlerModule {
}
