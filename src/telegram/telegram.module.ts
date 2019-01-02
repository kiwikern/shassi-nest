import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { Telegraf } from 'telegraf';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { ProductsModule } from '../products/products.module';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';

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
  ],
  imports: [
    ConfigModule,
    ProductsModule,
  ],
  exports: [
    TelegramService,
  ],
})
export class TelegramModule {
}