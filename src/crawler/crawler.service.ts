import { BadRequestException, HttpService, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Crawler } from './crawler.interface';
import { HmCrawler } from './crawlers/hm.crawler';
import { ProductUpdate } from '../products/entities/product-update.entity';
import { AboutyouCrawler } from './crawlers/aboutyou.crawler';
import { AmazonCrawler } from './crawlers/amazon.crawler';
import { CosCrawler } from './crawlers/cos.crawler';
import { WeekdayCrawler } from './crawlers/weekday.crawler';
import { AsosCrawler } from './crawlers/asos.crawler';
import { ZalandoCrawler } from './crawlers/zalando.crawler';
import { ProductSizeAvailability } from './product-size.interface';
import { StoriesCrawler } from './crawlers/stories.crawler';
import { SnipesCrawler } from './crawlers/snipes.crawler';
import { ArketCrawler } from './crawlers/arket.crawler';

@Injectable()
export class CrawlerService {

  private readonly logger: Logger = new Logger(CrawlerService.name);

  constructor(private httpService: HttpService) {
  }

  async getInitData(url: string): Promise<{ name: string; sizes: ProductSizeAvailability[]; url: string }> {
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
      isLowInStock: crawler.isLowInStock(sizeId),
      createdAt: new Date(),
    };
  }

  private async getCrawler(url: string): Promise<Crawler> {
    let crawler: Crawler;
    url = url.replace('http://', 'https://');
    if (!url.startsWith('https')) {
      url = 'https://' + url;
    }

    if (url.includes('hm.com')) {
      crawler = new HmCrawler(this.httpService);
    } else if (url.includes('asos.')) {
      crawler = new AsosCrawler(this.httpService);
    } else if (url.includes('weekday.')) {
      crawler = new WeekdayCrawler(this.httpService);
    } else if (url.includes('cosstores.')) {
      crawler = new CosCrawler(this.httpService);
    } else if (url.includes('aboutyou.de')) {
      crawler = new AboutyouCrawler(this.httpService);
    } else if (url.includes('amazon.de')) {
      crawler = new AmazonCrawler(this.httpService);
    } else if (url.includes('zalando.de')) {
      crawler = new ZalandoCrawler(this.httpService);
    } else if (url.includes('stories.com')) {
      crawler = new StoriesCrawler(this.httpService);
    } else if (url.includes('snipes.com')) {
      crawler = new SnipesCrawler(this.httpService);
    } else if (url.includes('arket.com')) {
      crawler = new ArketCrawler(this.httpService);
    } else {
      this.logger.error('No crawler found for given url.', url);
      throw new BadRequestException('Unknown store');
    }

    await crawler.init(url);
    return crawler;
  }

}
