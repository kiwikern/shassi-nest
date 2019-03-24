import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { AdminService } from './admin.service';
import { AdminUserOverviewDto } from './dtos/admin-user-overview.dto';
import { ApiUseTags, ApiBearerAuth, ApiOperation, ApiOkResponse, ApiForbiddenResponse } from '@nestjs/swagger';

@Controller('admin')
@ApiUseTags('admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiBearerAuth()
@Roles('admin')
export class AdminController {

  constructor(private service: AdminService) {
  }

  @ApiOperation({
    title: 'User Overview',
    description: 'Gets the admin user overview with aggregated information about registered users and their activities.',
  })
  @ApiOkResponse({ description: 'Returns registered users and their activities.', type: AdminUserOverviewDto, isArray: true })
  @ApiForbiddenResponse({ description: 'User must be logged in and have the admin role.' })
  @Get()
  async getAdminUserOverview(): Promise<AdminUserOverviewDto[]> {
    return this.service.getUsersOverview();
  }

}
