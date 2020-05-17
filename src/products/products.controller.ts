import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { User } from '../auth/user.decorator';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/products.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from '../users/entities/user.entity';
import { InitializeProductDto } from './dtos/initialize-product.dto';
import { ObjectID } from 'mongodb';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiForbiddenResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { ProductSizeAvailability } from '../crawler/product-size.interface';
import { ObjectIdPipe } from '../common/object-id.pipe';
import { FavoriteProductDto } from './dtos/favorite-product.dto';

export class ProductInitResponse {
  sizes: ProductSizeAvailability[];
  name: string;
  url: string;
}

// eslint-disable-line max-classes-per-file
@Controller('products')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(ClassSerializerInterceptor)
@ApiBearerAuth()
@ApiTags('products')
@ApiForbiddenResponse({ description: 'User must be logged in.' })
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  @ApiOperation({
    summary: 'List of products',
    description: 'Get the products for the logged in user',
  })
  @ApiOkResponse({
    isArray: true,
    description: "Returns all the user' products",
    type: ProductEntity,
  })
  getAllProducts(@User() user: UserEntity): Promise<ProductEntity[]> {
    return this.productsService.getProducts(user._id);
  }

  @Post('/init')
  @ApiOperation({
    summary: 'Initialize product',
    description:
      'Parse the product data for the given url without saving it in the database.',
  })
  @ApiCreatedResponse({
    description:
      'Returns the initial data for a product. Not yet saved in the database.',
    type: ProductInitResponse,
  })
  initProduct(
    @Body() initProductDto: InitializeProductDto,
  ): Promise<ProductInitResponse> {
    return this.productsService.initializeProduct(initProductDto.url);
  }

  @Post('/')
  @ApiOperation({
    summary: 'Save product',
    description: 'Saves a new product to the database with the chosen size.',
  })
  @ApiCreatedResponse({
    description: 'Returns the saved product.',
    type: ProductEntity,
  })
  addProduct(
    @User() user: UserEntity,
    @Body() product: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.productsService.addProduct(user._id, product);
  }

  @Post('/:id/markread')
  @ApiOperation({
    summary: 'Mark updates as read',
    description:
      'If the product has unread updates they will be marked as read.',
  })
  @ApiCreatedResponse({ description: 'Returns the updated product.' })
  @ApiParam({ name: 'id', type: String })
  markRead(
    @User() user: UserEntity,
    @Param('id', ObjectIdPipe) productId: ObjectID,
  ): Promise<ProductEntity> {
    return this.productsService.markRead(user._id, productId);
  }

  @Post('/:id/favorite')
  @ApiOperation({
    summary: 'Sets a product as favorite',
    description:
      'You can set a maximum of three products as favorites.' +
      ' They will get updated more frequently and trigger notifications for any changes.',
  })
  @ApiCreatedResponse({ description: 'Returns the updated product.' })
  @ApiParam({ name: 'id', type: String })
  setFavorite(
    @User() user: UserEntity,
    @Param('id', ObjectIdPipe) productId: ObjectID,
    @Body() update: FavoriteProductDto,
  ): Promise<ProductEntity> {
    return this.productsService.setFavorite(
      user._id,
      productId,
      update.isFavorite,
    );
  }

  @Post('/:id/update')
  @ApiOperation({
    summary: 'Update single product',
    description: 'Gets the product updates for the given single product.',
  })
  @ApiCreatedResponse({ description: 'Returns the updated product.' })
  @ApiParam({ name: 'id', type: String })
  updateProduct(
    @User() user: UserEntity,
    @Param('id', ObjectIdPipe) productId: ObjectID,
  ): Promise<ProductEntity> {
    return this.productsService.updateSingleProduct(user._id, productId);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Delete product',
    description: 'Deletes the given product.',
  })
  @ApiOkResponse({ description: 'Returns success state.' })
  @ApiParam({ name: 'id', type: String })
  async deleteProduct(
    @User() user: UserEntity,
    @Param('id', ObjectIdPipe) productId: ObjectID,
  ) {
    return {
      success: await this.productsService.deleteProduct(user._id, productId),
    };
  }
}
