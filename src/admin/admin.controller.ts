import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { AdminService } from './admin.service';
import { AdminUserOverviewDto } from './dtos/admin-user-overview.dto';

@Controller('admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('admin')
export class AdminController {

  constructor(private service: AdminService) {
  }

  @Get()
  async get(): Promise<AdminUserOverviewDto[]> {
    return this.service.getUsersOverview();
  }

}
