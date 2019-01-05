import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { ConfigModule } from '../config/config.module';
import { TelegramModule } from '../telegram/telegram.module';
import { ProductsModule } from '../products/products.module';
import { CommonModule } from '../common/common.module';

@Module({
  providers: [
    NotificationsService,
  ],
  imports: [
    ConfigModule,
    TelegramModule,
    ProductsModule,
    CommonModule,
  ],
  // exports: [
  //   NotificationsService,
  // ],
})
export class NotificationsModule {
}
