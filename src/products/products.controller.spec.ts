import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ObjectID } from 'mongodb';
import { MockType } from '../../test/mock.type';
import { productsServiceFactory } from '../../test/mocks/jest-mocks';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('Product Controller', () => {
  let module: TestingModule;
  let productsServiceMock: MockType<ProductsService>;
  let controller: ProductsController;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        { provide: ProductsService, useFactory: productsServiceFactory },
      ],
    }).compile();
    module.useLogger(new NoOpLogger());
    controller = module.get<ProductsController>(ProductsController);
    productsServiceMock = module.get(ProductsService);
  });

  it('should return all products', async () => {
    await controller.getAllProducts({ _id: 'id' } as any);
    expect(productsServiceMock.getProducts).toHaveBeenCalledWith('id');
  });

  it('should initialize a product', async () => {
    await controller.initProduct({ url: 'url' } as any);
    expect(productsServiceMock.initializeProduct).toHaveBeenCalledWith('url');
  });

  it('should add a product', async () => {
    await controller.addProduct({ _id: 'id' } as any, 'product' as any);
    expect(productsServiceMock.addProduct).toHaveBeenCalledWith('id', 'product');
  });

  it('should mark a product as read', async () => {
    const productId = new ObjectID.createFromTime(0);
    await controller.markRead({ _id: 'id' } as any, productId);
    expect(productsServiceMock.markRead).toHaveBeenCalledWith('id', productId);
  });

  it('should update a product', async () => {
    const productId = new ObjectID.createFromTime(0);
    await controller.updateProduct({ _id: 'id' } as any, productId);
    expect(productsServiceMock.updateSingleProduct).toHaveBeenCalledWith('id', productId);
  });

  it('should delete a product', async () => {
    const productId = new ObjectID.createFromTime(0);
    productsServiceMock.deleteProduct.mockImplementation(() => Promise.resolve(true));
    const result = await controller.deleteProduct({ _id: 'id' } as any, productId);
    expect(result.success).toBe(true);
    expect(productsServiceMock.deleteProduct).toHaveBeenCalledWith('id', productId);
  });

});
