import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerService } from './crawler.service';
import { HmCrawler } from './crawlers/hm.crawler';
import { AboutyouCrawler } from './crawlers/aboutyou.crawler';
import { AmazonCrawler } from './crawlers/amazon.crawler';
import { Crawler } from './crawler.interface';
import { ProductSizeAvailability } from './product-size.interface';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CosCrawler } from './crawlers/cos.crawler';
import { WeekdayCrawler } from './crawlers/weekday.crawler';

class CrawlerMock implements Crawler {
  url;
  constructor(public name: string) {
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return 0;
  }

  getSizes(): ProductSizeAvailability[] {
    return [];
  }

  getUrl(): string {
    return '';
  }

  init(url): Promise<any> {
    this.url = url;
    return Promise.resolve();
  }

  isInCatalog(): boolean {
    return !this.url.includes('not in catalog');
  }

  isSizeAvailable(sizeId?: string): boolean {
    return false;
  }
}

describe('CrawlerService', () => {
  let service: CrawlerService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CrawlerService,
        { provide: HmCrawler, useValue: new CrawlerMock('H&M') },
        { provide: AboutyouCrawler, useValue: new CrawlerMock('Aboutyou') },
        { provide: AmazonCrawler, useValue: new CrawlerMock('Amazon') },
        { provide: CosCrawler, useValue: new CrawlerMock('COS') },
        { provide: WeekdayCrawler, useValue: new CrawlerMock('Weekday') },
      ],
    }).compile();
    service = module.get<CrawlerService>(CrawlerService);
  });

  it('should get the H&M crawler', async () => {
    const initData = await service.getInitData('hm.com');
    expect(initData.name).toEqual('H&M');
  });

  it('should get the Aboutyou crawler', async () => {
    const initData = await service.getInitData('aboutyou.de');
    expect(initData.name).toEqual('Aboutyou');
  });

  it('should get the Amazon crawler', async () => {
    const initData = await service.getInitData('amazon.de');
    expect(initData.name).toEqual('Amazon');
  });

  it('should get the Weekday crawler', async () => {
    const initData = await service.getInitData('cosstores.com');
    expect(initData.name).toEqual('COS');
  });

  it('should get the COS crawler', async () => {
    const initData = await service.getInitData('weekday.com');
    expect(initData.name).toEqual('Weekday');
  });

  it('should throw on unknown url', async () => {
    try {
      await service.getInitData('unknown');
      fail('Should have thrown on invalid url.');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
    }
  });

  it('should reject init when not in catalog', async () => {
    try {
      await service.getInitData('hm.com/not in catalog');
      fail('Should have thrown on invalid url.');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });

  it('should get update data', async () => {
    const updateData = await service.getUpdateData('hm.com');
    expect(updateData.price).toBe(0);
  });

  it('should reject update when not in catalog', async () => {
    try {
      await service.getUpdateData('hm.com/not in catalog');
      fail('Should have thrown on invalid url.');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });
});
