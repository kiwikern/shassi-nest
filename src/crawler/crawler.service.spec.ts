import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerService } from './crawler.service';
import { HmCrawler } from './crawlers/hm.crawler';
import { AboutyouCrawler } from './crawlers/aboutyou.crawler';
import { AmazonCrawler } from './crawlers/amazon.crawler';
import { Crawler } from './crawler.interface';
import { ProductSizeAvailability } from './product-size.interface';
import { BadRequestException, NotFoundException } from '@nestjs/common';

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

  it('should throw on unknown url', async () => {
    try {
      await service.getInitData('unknown');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
      return;
    }
    fail('Should have thrown on invalid url.');
  });

  it('should reject when not in catalog', async () => {
    try {
      await service.getInitData('hm.com/not in catalog');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
      return;
    }
    fail('Should have thrown on invalid url.');
  });

  it('should get update data', async () => {
    const updateData = await service.getUpdateData('hm.com');
    expect(updateData.price).toBe(0);
  });
});
