import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Crawler } from './crawler.interface';
import { HmCrawler } from './crawlers/hm.crawler';
import { ProductUpdate } from '../products/entities/product-update.entity';
import { AboutyouCrawler } from './crawlers/aboutyou.crawler';
import { AmazonCrawler } from './crawlers/amazon.crawler';
import { CosCrawler } from './crawlers/cos.crawler';
import { WeekdayCrawler } from './crawlers/weekday.crawler';
import { AsosCrawler } from './crawlers/asos.crawler';

@Injectable()
export class CrawlerService {

  private readonly logger: Logger = new Logger(CrawlerService.name);

  constructor(private hmCrawler: HmCrawler,
              private aboutyouCrawler: AboutyouCrawler,
              private amazonCrawler: AmazonCrawler,
              private cosCrawler: CosCrawler,
              private weekdayCrawler: WeekdayCrawler,
              private asosCrawler: AsosCrawler,
              ) {
  }

  async getInitData(url: string) {
    const crawler = await this.getCrawler(url);
    if (!crawler.isInCatalog()) {
      throw new NotFoundException('Product does not exist.');
    }
    return {
      name: crawler.getName(),
      sizes: crawler.getSizes(),
      url: crawler.getUrl(),
    };
  }

  async getUpdateData(url: string, sizeId?: string): Promise<ProductUpdate> {
    const crawler = await this.getCrawler(url);
    if (!crawler.isInCatalog()) {
      throw new NotFoundException('Product does not exist.');
    }
    return {
      price: crawler.getPrice(sizeId),
      isAvailable: crawler.isSizeAvailable(sizeId),
      createdAt: new Date(),
    };
  }

  private async getCrawler(url: string): Promise<Crawler> {
    let crawler: Crawler;
    url = url.replace('http', 'https');
    if (!url.startsWith('https')) {
      url = 'https://' + url;
    }

    if (url.includes('hm.com')) {
      crawler = this.hmCrawler;
    } else if (url.includes('asos.')) {
      crawler = this.asosCrawler;
    } else if (url.includes('weekday.')) {
      crawler = this.weekdayCrawler;
    } else if (url.includes('cosstores.')) {
      crawler = this.cosCrawler;
    } else if (url.includes('aboutyou.de')) {
      crawler = this.aboutyouCrawler;
    } else if (url.includes('amazon.de')) {
      crawler = this.amazonCrawler;
    } else {
      this.logger.error('No crawler found for given url.',  url);
      throw new BadRequestException('Unknown store');
    }

    await crawler.init(url);
    return crawler;
  }

}
