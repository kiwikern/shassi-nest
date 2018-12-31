import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

class ProductsServiceMock {

}

describe('Product Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        { provide: ProductsService, useClass: ProductsServiceMock },
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProductsController = module.get<ProductsController>(ProductsController);
    expect(controller).toBeDefined();
  });
});
