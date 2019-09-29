import { Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { AdminService } from './admin.service';
import { AdminUserOverviewDto } from './dtos/admin-user-overview.dto';
import { ApiUseTags, ApiBearerAuth, ApiOperation, ApiOkResponse, ApiForbiddenResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { ProductEntity } from '../products/entities/products.entity';
import { ObjectIdPipe } from '../common/object-id.pipe';

@Controller('admin')
@ApiUseTags('admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'User must be logged in and have the admin role.' })
@Roles('admin')
export class AdminController {

  constructor(private service: AdminService) {
  }

  @ApiOperation({
    title: 'User Overview',
    description: 'Gets the admin user overview with aggregated information about registered users and their activities.',
  })
  @ApiOkResponse({ description: 'Returns registered users and their activities.', type: AdminUserOverviewDto, isArray: true })
  @Get()
  async getAdminUserOverview(): Promise<AdminUserOverviewDto[]> {
    return this.service.getUsersOverview();
  }

  @ApiOperation({
    title: 'Products with Errors',
    description: 'Gets all products that have at least one recorded error for all users.',
  })
  @ApiOkResponse({ description: 'Returns products with errors.', type: ProductEntity, isArray: true })
  @Get('error-products')
  async getErrorProducts(): Promise<ProductEntity[]> {
    return this.service.getErrorProducts();
  }

  @ApiOperation({
    title: 'Products with Errors',
    description: 'Reactivates a product. The recorded errors are cleared and the state is set to isActive.',
  })
  @ApiOkResponse({ description: 'Returns the reactivated product.', type: ProductEntity })
  @Patch('reactivate-product/:id')
  async reactivateProduct(@Param('id', ObjectIdPipe) productId): Promise<ProductEntity> {
    return this.service.reactivateProduct(productId);
  }

}
