import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { AdminService } from './admin.service';
import { AdminUserOverviewDto } from './dtos/admin-user-overview.dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { ProductEntity } from '../products/entities/products.entity';
import { ObjectIdPipe } from '../common/object-id.pipe';

@Controller('admin')
@ApiTags('admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiBearerAuth()
@ApiForbiddenResponse({
  description: 'User must be logged in and have the admin role.',
})
@Roles('admin')
export class AdminController {
  constructor(private service: AdminService) {}

  @ApiOperation({
    summary: 'User Overview',
    description:
      'Gets the admin user overview with aggregated information about registered users and their activities.',
  })
  @ApiOkResponse({
    description: 'Returns registered users and their activities.',
    type: AdminUserOverviewDto,
    isArray: true,
  })
  @Get()
  async getAdminUserOverview(): Promise<AdminUserOverviewDto[]> {
    return this.service.getUsersOverview();
  }

  @ApiOperation({
    summary: 'Products with Errors',
    description:
      'Gets all products that have at least one recorded error for all users.',
  })
  @ApiOkResponse({
    description: 'Returns products with errors.',
    type: ProductEntity,
    isArray: true,
  })
  @Get('error-products')
  async getErrorProducts(): Promise<ProductEntity[]> {
    return this.service.getErrorProducts();
  }

  @ApiOperation({
    summary: 'Products with Errors',
    description:
      'Reactivates a product. The recorded errors are cleared and the state is set to isActive.',
  })
  @ApiOkResponse({
    description: 'Returns the reactivated product.',
    type: ProductEntity,
  })
  @ApiNotFoundResponse({
    description: 'When product with given id does not exists.',
  })
  @Patch('reactivate-product/:id')
  async reactivateProduct(
    @Param('id', ObjectIdPipe) productId,
  ): Promise<ProductEntity> {
    return this.service.reactivateProduct(productId);
  }

  @ApiOperation({
    summary: 'Delete a Product',
    description: 'Deletes a product that belongs to any user.',
  })
  @ApiOkResponse({
    description: 'Returns true if the product was deleted.',
    type: ProductEntity,
  })
  @ApiNotFoundResponse({
    description: 'When product with given id does not exists.',
  })
  @Delete('products/:id')
  async deleteProduct(@Param('id', ObjectIdPipe) productId): Promise<boolean> {
    return this.service.deleteProduct(productId);
  }
}
