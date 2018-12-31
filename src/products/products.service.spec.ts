/* tslint:disable:max-classes-per-file */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { CrawlerService } from '../crawler/crawler.service';
import { ProductEntity } from './entities/products.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

class CrawlerServiceMock {
}

class RepositoryMock {
}

describe('ProductsService', () => {
  let service: ProductsService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        { provide: getRepositoryToken(ProductEntity), useClass: RepositoryMock },
        { provide: CrawlerService, useClass: CrawlerServiceMock },
      ],
    }).compile();
    service = module.get<ProductsService>(ProductsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
