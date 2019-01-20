import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { User } from '../auth/user.decorator';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/products.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from '../users/entities/user.entity';
import { InitializeProductDto } from './dtos/initialize-product.dto';
import { ObjectID } from 'mongodb';
import { ApiBearerAuth, ApiOkResponse, ApiUseTags, ApiForbiddenResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { ProductSizeAvailability } from '../crawler/product-size.interface';

@Controller('products')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(ClassSerializerInterceptor)
@ApiBearerAuth()
@ApiUseTags('products')
@ApiForbiddenResponse({ description: 'User must be logged in.' })
export class ProductsController {

  constructor(private productsService: ProductsService) {
  }

  @Get('/')
  @ApiOkResponse({ isArray: true, description: 'Returns all the user\' products', type: [ProductEntity] })
  getAllProducts(@User() user: UserEntity): Promise<ProductEntity[]> {
    return this.productsService.getProducts(user._id);
  }

  @Post('/init')
  @ApiCreatedResponse({
    description: 'Returns the initial data for a product. Not yet saved in the database.',
    type: { sizes: ProductSizeAvailability, name: String, url: String },
  })
  initProduct(@Body() initProductDto: InitializeProductDto) {
    return this.productsService.initializeProduct(initProductDto.url);
  }

  @Post('/')
  @ApiCreatedResponse({ description: 'Returns the saved product.', type: ProductEntity })
  addProduct(@User() user: UserEntity, @Body() product: CreateProductDto): Promise<ProductEntity> {
    return this.productsService.addProduct(user._id, product);
  }

  @Post('/:id/markread')
  @ApiCreatedResponse({ description: 'Returns the updated product.' })
  markRead(@User() user: UserEntity, @Param('id') productId: string): Promise<ProductEntity> {
    return this.productsService.markRead(user._id, new ObjectID(productId));
  }

  @Post('/:id/update')
  @ApiCreatedResponse({ description: 'Returns the updated product.' })
  updateProduct(@User() user: UserEntity, @Param('id') productId: string): Promise<ProductEntity> {
    return this.productsService.updateSingleProduct(user._id, new ObjectID(productId));
  }

  @Delete('/:id')
  @ApiOkResponse({ description: 'Returns success state.' })
  async deleteProduct(@User() user: UserEntity, @Param('id') productId: ObjectID) {
    return { success: await this.productsService.deleteProduct(user._id, new ObjectID(productId)) };
  }

}
