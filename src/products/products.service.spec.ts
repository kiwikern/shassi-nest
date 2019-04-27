/* tslint:disable:max-classes-per-file */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { CrawlerService } from '../crawler/crawler.service';
import { ProductEntity } from './entities/products.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { MockType } from '../../test/mock.type';
import { Repository } from 'typeorm';
import { crawlerServiceFactory, repositoryMockFactory } from '../../test/mocks/jest-mocks';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('ProductsService', () => {
  let service: ProductsService;
  let repositoryMock: MockType<Repository<ProductEntity>>;
  let crawlerServiceMock: MockType<CrawlerService>;
  const objectId = ObjectID.createFromTime(0);

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
    const products = await service.getProducts(objectId);
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
    const product = await service.addProduct(objectId, productCreateDto);
    const expectedSavedProduct = Object.assign({ updates: [{ price: 2 }], userId: objectId }, productCreateDto);
    expect(product).toEqual(expectedSavedProduct);
  });

  it('should not add a duplicate product', async () => {
    repositoryMock.findOne.mockReturnValue('a product');
    const productCreateDto = { size: { id: '', name: '' }, name: 'name', url: '' };
    try {
      await service.addProduct(objectId, productCreateDto);
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

    it('should return a price update', async () => {

      const productMockWithPriceUpdate = {
        url: 'hasPriceUpdate',
        updates: [],
        size: { id: '' },
        price: 90,
        isAvailable: true,
        isLowInStock: false,
      };

      repositoryMock.find.mockReturnValue([productMockWithPriceUpdate]);
      crawlerServiceMock.getUpdateData.mockReturnValue({
        price: 100, isAvailable: true, isLowInStock: false,
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
          hasLowInStockChange: false,
          hasNeverBeenLowInStockBefore: false,
        },
        product: { updates: [{ price: 100, isAvailable: true, isLowInStock: false }] },
      });
    });

    it('should return a deferred price update', async () => {

      const productMockWithDeferredPriceUpdate = {
        url: 'hasDeferredPriceUpdate',
        updates: [
          { price: 90, isAvailable: true, isLowInStock: false },
          { price: 100, isAvailable: false, isLowInStock: false },
        ],
        size: { id: '' },
        price: 100,
        isAvailable: false,
        isLowInStock: false,
      };
      repositoryMock.find.mockReturnValue([productMockWithDeferredPriceUpdate]);
      crawlerServiceMock.getUpdateData.mockReturnValue({
        price: 100, isAvailable: true, isLowInStock: false,
      });

      const updatedProducts = await service.updateAllProducts();

      expect(updatedProducts.length).toBe(1);
      expect(updatedProducts[0]).toMatchObject({
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: true,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: true,
          newPriceValue: 100,
          oldPriceValue: 90,
          hasLowInStockChange: false,
          hasNeverBeenLowInStockBefore: false,
        },
        product: {
          updates: [
            { price: 90, isAvailable: true, isLowInStock: false },
            { price: 100, isAvailable: false, isLowInStock: false },
            { price: 100, isAvailable: true, isLowInStock: false },
          ],
        },
      });
    });

    it('should return availability updates', async () => {

      const productMockWithAvailabilityUpdate = {
        url: 'hasAvailabilityUpdate',
        updates: [
          { price: 100, isAvailable: true, isLowInStock: false },
          { price: 90, isAvailable: false, isLowInStock: false },
        ],
        size: null,
        price: 100,
        isAvailable: false,
        isLowInStock: false,
      };

      const productMockWithFirstAvailabilityUpdate = {
        url: 'firstTimeAvailable',
        updates: [{ price: 100, isAvailable: false, isLowInStock: false }],
        size: { id: '' },
        price: 100,
        isAvailable: false,
        isLowInStock: false,
      };

      repositoryMock.find.mockReturnValue([
        productMockWithAvailabilityUpdate,
        productMockWithFirstAvailabilityUpdate,
      ]);
      crawlerServiceMock.getUpdateData.mockReturnValue({
        price: 100, isAvailable: true, isLowInStock: false,
      });

      const updatedProducts = await service.updateAllProducts();

      expect(updatedProducts.length).toBe(2);
      expect(updatedProducts[0]).toMatchObject({
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: true,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: false,
          hasLowInStockChange: false,
          hasNeverBeenLowInStockBefore: false,
        },
        product: {
          updates: [
            { price: 100, isAvailable: true, isLowInStock: false },
            { price: 90, isAvailable: false, isLowInStock: false },
            { price: 100, isAvailable: true, isLowInStock: false },
          ],
        },
      });
      expect(updatedProducts[1]).toMatchObject({
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: true,
          hasNeverBeenAvailableBefore: true,
          hasPriceChange: false,
          hasLowInStockChange: false,
          hasNeverBeenLowInStockBefore: false,
        },
        product: {
          updates: [
            { price: 100, isAvailable: false, isLowInStock: false },
            { price: 100, isAvailable: true, isLowInStock: false },
          ],
        },
      });
    });

    it('should return low in stock updates', async () => {

      const productMockWithLowInStockUpdate = {
        url: 'hasLowInStockUpdate',
        updates: [
          { price: 100, isAvailable: true, isLowInStock: true },
          { price: 100, isAvailable: true, isLowInStock: false },
        ],
        size: { id: '' },
        price: 100,
        isAvailable: true,
        isLowInStock: false,
      };
      const productMockWithFirstTimeLowInStockUpdate = {
        url: 'hasLowInStockUpdate',
        updates: [{ price: 100, isAvailable: true, isLowInStock: false }],
        size: { id: '' },
        price: 100,
        isAvailable: true,
        isLowInStock: false,
      };
      const productMockWithoutUpdate = {
        url: 'hasNoUpdate',
        updates: [{ price: 100, isAvailable: false, isLowInStock: true }],
        size: { id: '' },
        price: 100,
        isAvailable: true,
        isLowInStock: true,
      };

      repositoryMock.find.mockReturnValue([
        productMockWithLowInStockUpdate,
        productMockWithFirstTimeLowInStockUpdate,
        productMockWithoutUpdate,
      ]);
      crawlerServiceMock.getUpdateData.mockReturnValue({
        price: 100, isAvailable: true, isLowInStock: true,
      });

      const updatedProducts = await service.updateAllProducts();

      expect(updatedProducts.length).toBe(2);
      expect(updatedProducts[0]).toMatchObject({
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: false,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: false,
          hasLowInStockChange: true,
          hasNeverBeenLowInStockBefore: false,
        },
        product: {
          updates: [
            { price: 100, isAvailable: true, isLowInStock: true },
            { price: 100, isAvailable: true, isLowInStock: false },
            { price: 100, isAvailable: true, isLowInStock: true },
          ],
        },
      });
      expect(updatedProducts[1]).toMatchObject({
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: false,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: false,
          hasLowInStockChange: true,
          hasNeverBeenLowInStockBefore: true,
        },
        product: {
          updates: [
            { price: 100, isAvailable: true, isLowInStock: false },
            { price: 100, isAvailable: true, isLowInStock: true },
          ],
        },
      });
    });

    it('should continue if updates fail', async () => {
      const productMockWithPriceUpdate = {
        url: 'hasUpdate',
        updates: [],
        size: { id: '' },
        price: 90,
        isAvailable: true,
        errors: [],
      };
      const productMockWithInternalError = {
        url: 'error',
        updates: [],
        size: { id: '' },
        price: 100,
        isAvailable: false,
        errors: [],
      };
      const productMockWithNotFoundError = {
        url: 'notfound',
        updates: [],
        size: { id: '' },
        price: 100,
        isAvailable: true,
        errors: [],
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

    it('should update all favorites', async () => {
      repositoryMock.find.mockReturnValue([]);
      expect(await service.updateAllFavorites()).toEqual([]);
    });

  });

  it('should update a single product and clear errors', async () => {
    const productMockWithoutUpdate = {
      url: 'notfound',
      updates: [],
      errors: ['one error'],
      size: { id: '' },
      price: 100,
      isAvailable: true,
    };
    repositoryMock.findOne.mockReturnValue(productMockWithoutUpdate);
    crawlerServiceMock.getUpdateData.mockReturnValue({ price: 100, isAvailable: true });
    // errors should be cleared on successful update
    const updatedProduct = Object.assign(productMockWithoutUpdate, { errors: [] });
    await service.updateSingleProduct(null, null);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledWith(updatedProduct);
  });

  it('should add an error', async () => {
    const productMockWithoutErrors = {
      url: 'notfound',
      errors: [],
      size: { id: '' },
      price: 100,
      isAvailable: true,
    };
    repositoryMock.findOne.mockReturnValue(productMockWithoutErrors);
    crawlerServiceMock.getUpdateData.mockImplementation(() => {
      throw new BadRequestException('Your bad request');
    });
    const updatedProduct = Object.assign(productMockWithoutErrors, { errors: ['Your bad request'] });
    await service.updateSingleProduct(null, null);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledWith(updatedProduct);
  });

  it('should set to inactive on 3 errors', async () => {
    const productMockWithoutErrors = {
      url: 'notfound',
      errors: ['first', 'second'],
      size: { id: '' },
      price: 100,
      isAvailable: true,
    };
    repositoryMock.findOne.mockReturnValue(productMockWithoutErrors);
    crawlerServiceMock.getUpdateData.mockImplementation(() => {
      throw new BadRequestException('Your bad request');
    });
    const updatedProduct = Object.assign({}, productMockWithoutErrors,
      { errors: ['first', 'second', 'Your bad request'], isActive: false });
    await service.updateSingleProduct(null, null);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledWith(updatedProduct);
  });

  it('should throw on updateSingleProduct not found product', async () => {
    await expect(service.updateSingleProduct(objectId, objectId))
      .rejects
      .toThrow(NotFoundException);
  });

  it('should mark a product as read', async () => {
    repositoryMock.findOne.mockReturnValue({ id: 1 });
    const product = await service.markRead(objectId, objectId);
    expect(product).toEqual({ id: 1, hasUnreadUpdate: false });
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
  });

  it('should throw on markRead not found product', async () => {
    await expect(service.markRead(objectId, objectId))
      .rejects
      .toThrow(NotFoundException);
  });

  it('should set a product as favorite', async () => {
    repositoryMock.findOne.mockReturnValue({ id: 1 });
    repositoryMock.find.mockReturnValue([{}, {}]);
    const product = await service.setFavorite(objectId, objectId, true);
    expect(product).toEqual({ id: 1, isFavorite: true });
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
  });

  it('should throw on setFavorite not found product', async () => {
    await expect(service.setFavorite(objectId, objectId, true))
      .rejects
      .toThrow(NotFoundException);
  });

  it('should throw on favorite limit exceeded', async () => {
    repositoryMock.findOne.mockReturnValue({ id: 1 });
    repositoryMock.find.mockReturnValue([{}, {}, {}]);
    await expect(service.setFavorite(objectId, objectId, true))
      .rejects
      .toThrow(ForbiddenException);
  });

  it('should allow to unset favorite when limit exceeded', async () => {
    repositoryMock.findOne.mockReturnValue({ id: 1 });
    repositoryMock.find.mockReturnValue([{ id: 1 }, {}, {}]);
    const updatedProduct = await service.setFavorite(objectId, objectId, false);
    expect(updatedProduct).toEqual({ id: 1, isFavorite: false });
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
  });

  it('should delete a product', async () => {
    repositoryMock.findOne.mockReturnValue({ id: 1 });
    const wasSuccessful = await service.deleteProduct(objectId, objectId);
    expect(wasSuccessful).toBe(true);
    expect(repositoryMock.delete).toHaveBeenCalled();
  });

  it('should throw on not found product when deleting', async () => {
    await expect(service.deleteProduct(objectId, objectId))
      .rejects
      .toThrow(NotFoundException);
  });

});
