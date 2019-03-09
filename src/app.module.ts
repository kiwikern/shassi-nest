import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import { CrawlerModule } from './crawler/crawler.module';
import { TelegramModule } from './telegram/telegram.module';
import { CommonModule } from './common/common.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UserEntity } from './users/entities/user.entity';
import { TelegramTokenEntity } from './telegram/telegram-token.entity';
import { TelegramUserIdEntity } from './telegram/telegram-user-id.entity';
import { ProductEntity } from './products/entities/products.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return ({
          type: 'mongodb',
          host: configService.databaseHost,
          port: configService.databasePort,
          username: configService.databaseUsername,
          password: configService.databasePassword,
          database: configService.databaseName,
          entities: [
            UserEntity,
            ProductEntity,
            TelegramTokenEntity,
            TelegramUserIdEntity,
          ],
          synchronize: true,
          keepConnectionAlive: !configService.isProduction && configService.keepConnectionAlive,
        });
      },
      inject: [ConfigService],
    }),
    ProductsModule,
    UsersModule,
    AuthModule,
    CrawlerModule,
    TelegramModule,
    CommonModule,
    NotificationsModule,
  ],
})
export class AppModule {
}
