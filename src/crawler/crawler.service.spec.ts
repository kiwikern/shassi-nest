import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerService } from './crawler.service';
import {
  BadRequestException,
  HttpService,
  NotFoundException,
} from '@nestjs/common';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

let savedUrl;

function crawlerMock(name) {
  return jest.fn(() => {
    return {
      url: 'null',

      getName: () => {
        return name;
      },

      getPrice: () => 0,

      getSizes: () => [],

      getUrl: () => savedUrl,

      init: url => {
        savedUrl = url;
        return Promise.resolve();
      },

      isInCatalog(): boolean {
        return !savedUrl.includes('not in catalog');
      },

      isSizeAvailable: () => false,

      isLowInStock: () => false,
    };
  });
}

jest.mock('./crawlers/hm.crawler', () => ({ HmCrawler: crawlerMock('H&M') }));
jest.mock('./crawlers/aboutyou.crawler', () => ({
  AboutyouCrawler: crawlerMock('Aboutyou'),
}));
jest.mock('./crawlers/amazon.crawler', () => ({
  AmazonCrawler: crawlerMock('Amazon'),
}));
jest.mock('./crawlers/cos.crawler', () => ({ CosCrawler: crawlerMock('COS') }));
jest.mock('./crawlers/weekday.crawler', () => ({
  WeekdayCrawler: crawlerMock('Weekday'),
}));
jest.mock('./crawlers/asos.crawler', () => ({
  AsosCrawler: crawlerMock('Asos'),
}));
jest.mock('./crawlers/zalando.crawler', () => ({
  ZalandoCrawler: crawlerMock('Zalando'),
}));
jest.mock('./crawlers/stories.crawler', () => ({
  StoriesCrawler: crawlerMock('Stories'),
}));
jest.mock('./crawlers/snipes.crawler', () => ({
  SnipesCrawler: crawlerMock('Snipes'),
}));
jest.mock('./crawlers/arket.crawler', () => ({
  ArketCrawler: crawlerMock('Arket'),
}));

describe('CrawlerService', () => {
  let service: CrawlerService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerService, { provide: HttpService, useValue: null }],
    }).compile();
    module.useLogger(new NoOpLogger());
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
    const initData = await service.getInitData('https://cosstores.com');
    expect(initData.name).toEqual('COS');
  });

  it('should get the COS crawler', async () => {
    const initData = await service.getInitData('http://weekday.com');
    expect(initData.name).toEqual('Weekday');
  });

  it('should get the Asos crawler', async () => {
    const initData = await service.getInitData('asos.com');
    expect(initData.name).toEqual('Asos');
  });

  it('should get the Zalando crawler', async () => {
    const initData = await service.getInitData('zalando.de');
    expect(initData.name).toEqual('Zalando');
  });

  it('should get the Stories crawler', async () => {
    const initData = await service.getInitData('stories.com');
    expect(initData.name).toEqual('Stories');
  });

  it('should get the Snipes crawler', async () => {
    const initData = await service.getInitData('snipes.com');
    expect(initData.name).toEqual('Snipes');
  });

  it('should get the Arket crawler', async () => {
    const initData = await service.getInitData('arket.com');
    expect(initData.name).toEqual('Arket');
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
