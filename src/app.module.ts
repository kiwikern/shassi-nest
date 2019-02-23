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

// needed to load entities for webpack hmr
const entityContext = require && (require as any).context
  ? (require as any).context('.', true, /\.entity\.ts$/)
  : null;

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
          entities: configService.isProduction || !entityContext
            ? [__dirname + '/**/*.entity{.ts,.js}']
            : [
              ...entityContext.keys().map(id => {
                const entityModule = entityContext(id);
                const [entity] = Object.values(entityModule);
                return entity;
              }),
            ],
          synchronize: true,
          keepConnectionAlive: true,
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
