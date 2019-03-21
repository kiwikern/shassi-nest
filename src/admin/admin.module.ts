import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [
    UsersModule,
    ProductsModule,
    TelegramModule,
  ],
})
export class AdminModule {
}
