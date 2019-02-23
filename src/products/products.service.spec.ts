/* tslint:disable:max-classes-per-file */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { CrawlerService } from '../crawler/crawler.service';
import { ProductEntity } from './entities/products.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { useAsPath } from 'tslint/lib/configuration';
import { CronJobService } from '../common/cron-job.service';
import { MockType } from '../../test/mock.type';
import { CronJob } from 'cron';
import { Repository } from 'typeorm';
import { crawlerServiceFactory, repositoryMockFactory } from '../../test/mocks/jest-mocks';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('ProductsService', () => {
  let service: ProductsService;
  let repositoryMock: MockType<Repository<ProductEntity>>;
  let crawlerServiceMock: MockType<CrawlerService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        { provide: getRepositoryToken(ProductEntity), useFactory: repositoryMockFactory },
        { provide: CrawlerService, useFactory: crawlerServiceFactory },
      ],
    }).compile();
    module.useLogger(new NoOpLogger());
    service = module.get<ProductsService>(ProductsService);
    repositoryMock = module.get(getRepositoryToken(ProductEntity));
    crawlerServiceMock = module.get(CrawlerService);
  });

  it('should get products', async () => {
    repositoryMock.find.mockReturnValue([]);
    const products = await service.getProducts(ObjectID.createFromTime(0));
    expect(products).toEqual([]);
  });

  it('should initialize a product', async () => {
    crawlerServiceMock.getInitData.mockReturnValue({ sizes: [], name: 'name', url: 'url' });
    const products = await service.initializeProduct('');
    expect(products).toEqual({ sizes: [], name: 'name', url: 'url' });
  });

  it('should add a new product after initialization', async () => {
    const productCreateDto = { size: { id: '', name: '' }, name: 'name', url: '' };
    repositoryMock.findOne.mockReturnValue(null);
    crawlerServiceMock.getUpdateData.mockReturnValue({ price: 2 });
    const product = await service.addProduct(ObjectID.createFromTime(0), productCreateDto);
    const expectedSavedProduct = Object.assign({ updates: [{ price: 2 }], userId: ObjectID.createFromTime(0) }, productCreateDto);
    expect(product).toEqual(expectedSavedProduct);
  });

  it('should not add a duplicate product', async () => {
    repositoryMock.findOne.mockReturnValue('a product');
    const productCreateDto = { size: { id: '', name: '' }, name: 'name', url: '' };
    try {
      await service.addProduct(ObjectID.createFromTime(0), productCreateDto);
      fail('Should not have added duplicate product');
    } catch (e) {
      expect(e).toBeInstanceOf(ConflictException);
    }
  });

  describe('Update all products', () => {

    it('should accept empty list of products', async () => {
      repositoryMock.find.mockReturnValue([]);
      const updatedProducts = await service.updateAllProducts();
      expect(updatedProducts).toEqual([]);
    });

    it('should return all updated products', async () => {

      const productMockWithPriceUpdate = {
        url: 'hasPriceUpdate',
        updates: [],
        size: { id: '' },
        price: 90,
        isAvailable: true,
      };
      const productMockWithDeferredPriceUpdate = {
        url: 'hasDeferredPriceUpdate',
        updates: [
          { price: 90, isAvailable: true },
          { price: 100, isAvailable: false },
        ],
        size: { id: '' },
        price: 100,
        isAvailable: false,
      };
      const productMockWithAvailabilityUpdate = {
        url: 'hasAvailabilityUpdate',
        updates: [
          { price: 100, isAvailable: true },
          { price: 90, isAvailable: false },
        ],
        size: { id: '' },
        price: 100,
        isAvailable: false,
      };
      const productMockWithFirstAvailabilityUpdate = {
        url: 'firstTimeAvailable',
        updates: [{ price: 100, isAvailable: false }],
        size: { id: '' },
        price: 100,
        isAvailable: false,
      };
      const productMockWithoutUpdate = {
        url: 'hasNoUpdate',
        updates: [{ price: 100, isAvailable: false }],
        size: { id: '' },
        price: 100,
        isAvailable: true,
      };

      repositoryMock.find.mockReturnValue([
        productMockWithPriceUpdate,
        productMockWithDeferredPriceUpdate,
        productMockWithAvailabilityUpdate,
        productMockWithFirstAvailabilityUpdate,
        productMockWithoutUpdate,
      ]);
      crawlerServiceMock.getUpdateData.mockReturnValue({ price: 100, isAvailable: true });

      const updatedProducts = await service.updateAllProducts();

      expect(updatedProducts.length).toBe(4);
      expect(updatedProducts[0]).toMatchObject({
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: false,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: true,
          newPriceValue: 100,
          oldPriceValue: 90,
        },
        product: { updates: [{ price: 100, isAvailable: true }] },
      });
      expect(updatedProducts[1]).toMatchObject({
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: true,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: true,
          newPriceValue: 100,
          oldPriceValue: 90,
        },
        product: {
          updates: [
            { price: 90, isAvailable: true },
            { price: 100, isAvailable: false },
            { price: 100, isAvailable: true },
          ],
        },
      });
      expect(updatedProducts[2]).toMatchObject({
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: true,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: false,
        },
        product: {
          updates: [
            { price: 100, isAvailable: true },
            { price: 90, isAvailable: false },
            { price: 100, isAvailable: true },
          ],
        },
      });
      expect(updatedProducts[3]).toMatchObject({
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: true,
          hasNeverBeenAvailableBefore: true,
          hasPriceChange: false,
        },
        product: { updates: [{ price: 100, isAvailable: false }, { price: 100, isAvailable: true }] },
      });
    });

    it('should continue if updates fail', async () => {
      const productMockWithPriceUpdate = {
        url: 'hasUpdate',
        updates: [],
        size: { id: '' },
        price: 90,
        isAvailable: true,
      };
      const productMockWithInternalError = {
        url: 'error',
        updates: [],
        size: { id: '' },
        price: 100,
        isAvailable: false,
      };
      const productMockWithNotFoundError = {
        url: 'notfound',
        updates: [],
        size: { id: '' },
        price: 100,
        isAvailable: true,
      };
      repositoryMock.find.mockReturnValue([
        productMockWithNotFoundError,
        productMockWithPriceUpdate,
        productMockWithInternalError,
      ]);
      crawlerServiceMock.getUpdateData.mockImplementation(url => {
        if (url === 'error') {
          throw new InternalServerErrorException();
        }
        if (url === 'notfound') {
          throw new NotFoundException('Request failed with status code 404');
        }
        return { price: 100, isAvailable: true };
      });
      const updatedProducts = await service.updateAllProducts();
      expect(updatedProducts.length).toBe(1);
      expect(updatedProducts[0]).toMatchObject({
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: false,
            hasNeverBeenAvailableBefore: false,
            hasPriceChange: true,
            newPriceValue: 100,
            oldPriceValue: 90,
          },
        product: { updates: [{ price: 100, isAvailable: true }] },
      });
      expect(repositoryMock.save).toBeCalledWith(expect.objectContaining({ isActive: false }));
    });

  });

  it('should update a single product', async () => {
    const productMockWithoutUpdate = {
      url: 'notfound',
      updates: [],
      size: { id: '' },
      price: 100,
      isAvailable: true,
    };
    repositoryMock.findOne.mockReturnValue(productMockWithoutUpdate);
    crawlerServiceMock.getUpdateData.mockReturnValue({ price: 100, isAvailable: true });
    expect(await service.updateSingleProduct(null, null)).toEqual(productMockWithoutUpdate);
  });

  it('should throw on updateSingleProduct not found product', async () => {
    try {
      await service.updateSingleProduct(ObjectID.createFromTime(0), ObjectID.createFromTime(0));
      fail('Should have thrown an exception.');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });

  it('should mark a product as read', async () => {
    repositoryMock.findOne.mockReturnValue({ id: 1 });
    const product = await service.markRead(ObjectID.createFromTime(0), ObjectID.createFromTime(0));
    expect(product).toEqual({ id: 1, hasUnreadUpdate: false });
  });

  it('should throw on markRead not found product', async () => {
    try {
      await service.markRead(ObjectID.createFromTime(0), ObjectID.createFromTime(0));
      fail('Should have thrown an exception.');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });

  it('should delete a product', async () => {
    repositoryMock.findOne.mockReturnValue({ id: 1 });
    const wasSuccessful = await service.deleteProduct(ObjectID.createFromTime(0), ObjectID.createFromTime(0));
    expect(wasSuccessful).toBe(true);
    expect(repositoryMock.delete).toHaveBeenCalled();
  });

  it('should throw on not found product when deleting', async () => {
    try {
      await service.deleteProduct(ObjectID.createFromTime(0), ObjectID.createFromTime(0));
      fail('Should have thrown an exception.');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });

});
