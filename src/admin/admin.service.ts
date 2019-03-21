import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { UsersService } from '../users/users.service';
import { ProductEntity } from '../products/entities/products.entity';
import { AdminUserOverviewDto } from './dtos/admin-user-overview.dto';
import { TelegramUserIdService } from '../telegram/telegram-user-id.service';
import { UserEntity } from '../users/entities/user.entity';

@Injectable()
export class AdminService {
  constructor(private readonly productsService: ProductsService,
              private readonly usersService: UsersService,
              private readonly telegramIdService: TelegramUserIdService) {
  }

  async getUsersOverview(): Promise<AdminUserOverviewDto[]> {
    const users = await this.usersService.getAllUsers();
    const overviews = users.map(user => this.createUserOverview(user));
    return Promise.all(overviews);
  }

  private async createUserOverview(user: UserEntity): Promise<AdminUserOverviewDto> {
    const userInfo = {
      userId: user._id,
      username: user.username,
    };
    const productInfo = await this.getProductInfo(user._id);
    const telegramInfo = await this.getTelegramInfo(user._id);
    return Object.assign({}, userInfo, productInfo, telegramInfo);
  }

  private async getProductInfo(userId): Promise<{ productCount: number, latestProductAddedDate?: Date, latestProductUpdatedDate?: Date }> {
    const products = await this.productsService.getProducts(userId);
    if (products && products.length > 0) {
      return {
        productCount: products.length,
        latestProductAddedDate: products[products.length - 1].getCreatedAt(),
        latestProductUpdatedDate: this.getLatestUpdatedProduct(products).updatedAt,
      };
    } else {
      return { productCount: 0 };
    }
  }

  private getLatestUpdatedProduct(products: ProductEntity[]): ProductEntity {
    const compareProductUpdateDate = (p1, p2) => p1.updatedAt < p2.updatedAt ? 1 : -1;
    return products.sort(compareProductUpdateDate)[0];
  }

  private async getTelegramInfo(userId: string) {
    return { isConnectedToTelegram: await this.telegramIdService.findTelegramId(userId) !== null };
  }
}
