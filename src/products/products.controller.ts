import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { User } from '../auth/user.decorator';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/products.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from '../users/entities/user.entity';
import { InitializeProductDto } from './dtos/initialize-product.dto';

@Controller('products')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(ClassSerializerInterceptor)
export class ProductsController {

  constructor(private productsService: ProductsService) {
  }

  @Get('/')
  getAllProducts(@User() user: UserEntity): Promise<ProductEntity[]> {
    return this.productsService.getProducts(user.id);
  }

  @Post('/init')
  initProduct(@Body() initProductDto: InitializeProductDto) {
    return this.productsService.initializeProduct(initProductDto.url);
  }

  @Post('/')
  addProduct(@User() user: UserEntity, @Body() product: CreateProductDto): Promise<ProductEntity> {
    return this.productsService.addProduct(user.id, product);
  }

}
