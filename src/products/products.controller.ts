import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { User } from '../auth/user.decorator';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/products.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from '../users/entities/user.entity';
import { InitializeProductDto } from './dtos/initialize-product.dto';
import { ObjectID } from 'mongodb';
import { ApiBearerAuth, ApiOkResponse, ApiUseTags, ApiForbiddenResponse, ApiCreatedResponse, ApiOperation, ApiImplicitParam } from '@nestjs/swagger';
import { ProductSizeAvailability } from '../crawler/product-size.interface';
import { ObjectIdPipe } from '../common/object-id.pipe';
import { FavoriteProductDto } from './dtos/favorite-product.dto';

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
  @ApiOperation({ title: 'List of products', description: 'Get the products for the logged in user' })
  @ApiOkResponse({ isArray: true, description: 'Returns all the user\' products', type: ProductEntity })
  getAllProducts(@User() user: UserEntity): Promise<ProductEntity[]> {
    return this.productsService.getProducts(user._id);
  }

  @Post('/init')
  @ApiOperation({ title: 'Initialize product', description: 'Parse the product data for the given url without saving it in the database.' })
  @ApiCreatedResponse({
    description: 'Returns the initial data for a product. Not yet saved in the database.',
    type: { sizes: ProductSizeAvailability, name: String, url: String },
  })
  initProduct(@Body() initProductDto: InitializeProductDto) {
    return this.productsService.initializeProduct(initProductDto.url);
  }

  @Post('/')
  @ApiOperation({ title: 'Save product', description: 'Saves a new product to the database with the chosen size.' })
  @ApiCreatedResponse({ description: 'Returns the saved product.', type: ProductEntity })
  addProduct(@User() user: UserEntity, @Body() product: CreateProductDto): Promise<ProductEntity> {
    return this.productsService.addProduct(user._id, product);
  }

  @Post('/:id/markread')
  @ApiOperation({ title: 'Mark updates as read', description: 'If the product has unread updates they will be marked as read.' })
  @ApiCreatedResponse({ description: 'Returns the updated product.' })
  @ApiImplicitParam({ name: 'id', type: String })
  markRead(@User() user: UserEntity, @Param('id', ObjectIdPipe) productId: ObjectID): Promise<ProductEntity> {
    return this.productsService.markRead(user._id, productId);
  }

  @Post('/:id/favorite')
  @ApiOperation({
    title: 'Sets a product as favorite',
    description: 'You can set a maximum of three products as favorites.' +
      ' They will get updated more frequently and trigger notifications for any changes.',
  })
  @ApiCreatedResponse({ description: 'Returns the updated product.' })
  @ApiImplicitParam({ name: 'id', type: String })
  setFavorite(@User() user: UserEntity, @Param('id', ObjectIdPipe) productId: ObjectID, @Body() update: FavoriteProductDto): Promise<ProductEntity> {
    return this.productsService.setFavorite(user._id, productId, update.isFavorite);
  }

  @Post('/:id/update')
  @ApiOperation({ title: 'Update single product', description: 'Gets the product updates for the given single product.' })
  @ApiCreatedResponse({ description: 'Returns the updated product.' })
  @ApiImplicitParam({ name: 'id', type: String })
  updateProduct(@User() user: UserEntity, @Param('id', ObjectIdPipe) productId: ObjectID): Promise<ProductEntity> {
    return this.productsService.updateSingleProduct(user._id, productId);
  }

  @Delete('/:id')
  @ApiOperation({ title: 'Delete product', description: 'Deletes the given product.' })
  @ApiOkResponse({ description: 'Returns success state.' })
  @ApiImplicitParam({ name: 'id', type: String })
  async deleteProduct(@User() user: UserEntity, @Param('id', ObjectIdPipe) productId: ObjectID) {
    return { success: await this.productsService.deleteProduct(user._id, productId) };
  }

}
