import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ObjectID } from 'mongodb';

describe('Product Controller', () => {
  let module: TestingModule;
  let productsServiceMock;
  let controller: ProductsController;

  beforeEach(async () => {
    productsServiceMock = new (jest.fn(() => ({
      getProducts: jest.fn(),
      initializeProduct: jest.fn(),
      addProduct: jest.fn(),
      markRead: jest.fn(),
      deleteProduct: jest.fn(() => Promise.resolve(true)),
    })))();

    module = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        { provide: ProductsService, useValue: productsServiceMock },
      ],
    }).compile();
    controller = module.get<ProductsController>(ProductsController);
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

  it('should return all products', async () => {
    const productId = new ObjectID.createFromTime(0);
    await controller.markRead({ _id: 'id' } as any, productId.toString());
    expect(productsServiceMock.markRead).toHaveBeenCalledWith('id', productId);
  });

  it('should return all products', async () => {
    const productId = new ObjectID.createFromTime(0);
    const result = await controller.deleteProduct({ _id: 'id' } as any, productId.toString());
    expect(result.success).toBe(true);
    expect(productsServiceMock.deleteProduct).toHaveBeenCalledWith('id', productId);
  });

});
