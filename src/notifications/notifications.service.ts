import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ProductChange } from '../products/dtos/product-change.interface';
import { ConfigService } from '../config/config.service';
import { TelegramService } from '../telegram/telegram.service';
import { CronJobService } from '../common/cron-job.service';
import { ProductsService } from '../products/products.service';
import { ObjectID } from 'mongodb';
import { CronJob } from 'cron';

@Injectable()
export class NotificationsService implements OnModuleInit, OnModuleDestroy {

  private logger: Logger = new Logger(NotificationsService.name);

  constructor(private configService: ConfigService,
              private cronJobService: CronJobService,
              private productsService: ProductsService,
              private telegramService: TelegramService) {
  }

  private job: CronJob;

  onModuleInit() {
    // if (!this.configService.isProduction) this.sendNotificationsPerUser();
    this.job = this.cronJobService.create('00 00 8,14,18 * * *', () => this.sendNotificationsPerUser());
    this.job.start();
    this.logger.log('Product CronJob started, next execution: ' + this.job.nextDates().toString());
  }

  onModuleDestroy() {
    if (this.job) {
      this.job.stop();
    }
  }

  async sendNotificationsPerUser() {
    this.logger.log('Updating all products');
    const changes = await this.productsService.updateAllProducts();
    const changesPerUser = new Map<ObjectID, ProductChange[]>();
    for (const change of changes) {
      const userChanges = changesPerUser.get(change.product.userId) || [];
      userChanges.push(change);
      changesPerUser.set(change.product.userId, userChanges);
    }
    this.sendNotifications(changesPerUser);
  }

  private sendNotifications(changesPerUser: Map<ObjectID, ProductChange[]>) {
    for (const userId of changesPerUser.keys()) {
      changesPerUser.get(userId)
        .filter(update => this.isRelevantChange(update))
        .map(update => this.getMarkdownUpdateText(update))
        .filter(text => !!text)
        .forEach(async text => {
          try {
            await this.telegramService.notifyAboutUpdate(userId, text);
          } catch (e) {
            this.logger.error({ message: e.message, userId }, e.stack);
          }
        });
    }
  }

  private isRelevantChange(update: ProductChange) {
    const changes = update.productAttributeChanges;
    return update.product.isAvailable
      && (changes.hasPriceChange
        || changes.hasNeverBeenAvailableBefore
        || changes.hasLowInStockChange && update.product.isLowInStock && changes.hasNeverBeenLowInStockBefore);
  }

  private getMarkdownUpdateText(update: ProductChange) {
    const changes = update.productAttributeChanges;
    let updateText;
    if (changes.hasPriceChange) {
      const priceDelta = changes.newPriceValue - changes.oldPriceValue;
      const prefix = priceDelta > 0 ? '+' : '';
      const lowInStockText = update.product.isLowInStock ? ', low in stock' : '';
      const newPrice = changes.newPriceValue.toFixed(2);
      const priceDeltaText = `${prefix}${priceDelta.toFixed(2)}`;
      updateText = `is now at ${newPrice}€ (${priceDeltaText}€${lowInStockText})`;
    } else if (changes.hasAvailabilityChange) {
      const lowInStockText = update.product.isLowInStock ? ' and low in stock' : '';
      updateText = `is available again${lowInStockText}`;
    } else if (changes.hasLowInStockChange) {
      updateText = `is now low in stock`;
    } else {
      this.logger.error({
        message: 'Unknown product attribute change.', changes, product: update.product,
      });
      return null;
    }
    const url = `${this.configService.frontendDomain}/products/${update.product._id}`;
    const shassiLink = `[product](${update.product.url})`;
    const nameLink = `[${update.product.name}](${url})`;
    return `Your ${shassiLink} ${nameLink} ${updateText}. 👚`;
  }

}
