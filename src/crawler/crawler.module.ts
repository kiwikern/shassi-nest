import { HttpModule, Module } from '@nestjs/common';
import { CrawlerService } from './crawler.service';
import { PuppeteerService } from './puppeteer/puppeteer.service';

@Module({
  providers: [CrawlerService, PuppeteerService],
  imports: [HttpModule],
  exports: [CrawlerService],
})
export class CrawlerModule {}
