import { HttpModule, Module } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Module({
  providers: [
    CrawlerService,
  ],
  imports: [HttpModule],
  exports: [CrawlerService],
})
export class CrawlerModule {
}
