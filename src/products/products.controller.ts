import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { User } from '../auth/user.decorator';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/products.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from '../users/entities/user.entity';
import { InitializeProductDto } from './dtos/initialize-product.dto';
import { ObjectID } from 'mongodb';

@Controller('products')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(ClassSerializerInterceptor)
export class ProductsController {

  constructor(private productsService: ProductsService) {
  }

  @Get('/')
  getAllProducts(@User() user: UserEntity): Promise<ProductEntity[]> {
    return this.productsService.getProducts(user._id);
  }

  @Post('/init')
  initProduct(@Body() initProductDto: InitializeProductDto) {
    return this.productsService.initializeProduct(initProductDto.url);
  }

  @Post('/')
  addProduct(@User() user: UserEntity, @Body() product: CreateProductDto): Promise<ProductEntity> {
    return this.productsService.addProduct(user._id, product);
  }

  @Post('/:id/markread')
  markRead(@User() user: UserEntity, @Param('id') productId: string) {
    return this.productsService.markRead(user._id, new ObjectID(productId));
  }

  @Delete('/:id')
  async deleteProduct(@User() user: UserEntity, @Param('id') productId: ObjectID) {
    return { success: await this.productsService.deleteProduct(user._id, new ObjectID(productId)) };
  }

}
