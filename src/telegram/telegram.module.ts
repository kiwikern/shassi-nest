import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { ProductsModule } from '../products/products.module';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelegramTokenEntity } from './telegram-token.entity';
import { TelegramUserIdEntity } from './telegram-user-id.entity';
import { CronJobService } from './cron-job.service';
import Telegraf from 'telegraf';

@Module({
  providers: [
    TelegramService,
    TelegramTokenService,
    {
      provide: Telegraf,
      useFactory: async (configService: ConfigService) => {
        return new Telegraf(configService.telegramToken);
      },
      inject: [ConfigService],
    },
    TelegramUserIdService,
    CronJobService,
  ],
  imports: [
    ConfigModule,
    ProductsModule,
    TypeOrmModule.forFeature([TelegramTokenEntity, TelegramUserIdEntity]),
  ],
  exports: [
    TelegramService,
  ],
})
export class TelegramModule {
}
