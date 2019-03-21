import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { UsersService } from '../users/users.service';
import { ProductEntity } from '../products/entities/products.entity';
import { AdminUserOverviewDto } from './dtos/admin-user-overview.dto';

@Injectable()
export class AdminService {
  constructor(private readonly productsService: ProductsService,
              private readonly usersService: UsersService) {
  }

  async getUsersOverview(): Promise<AdminUserOverviewDto[]> {
    const users = await this.usersService.getAllUsers();
    const overviews = users.map(user => this.createUserOverview(user))
      .map(overview => this.addProductInfo(overview));
    return Promise.all(overviews);
  }

  private createUserOverview(user): AdminUserOverviewDto {
    return {
      userId: user._id,
      username: user.username,
      productCount: 0,
    };
  }

  private async addProductInfo(overview: AdminUserOverviewDto): Promise<AdminUserOverviewDto> {
    const products = await this.productsService.getProducts(overview.userId);
    if (products && products.length > 0) {
      overview.productCount = products.length;
      overview.latestProductAddedDate = products[products.length - 1].getCreatedAt();
      overview.latestProductUpdatedDate = this.getLatestUpdatedProduct(products).updatedAt;
    }
    return overview;
  }

  private getLatestUpdatedProduct(products: ProductEntity[]): ProductEntity {
    const compareProductUpdateDate = (p1, p2) => p1.updatedAt < p2.updatedAt ? 1 : -1;
    return products.sort(compareProductUpdateDate)[0];
  }
}
