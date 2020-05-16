import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ProductChange } from '../products/dtos/product-change.interface';
import { ConfigService } from '../config/config.service';
import { TelegramService } from '../telegram/telegram.service';
import { CronJobService } from '../common/cron-job.service';
import { ProductsService } from '../products/products.service';
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
  private favoritesJob: CronJob;

  onModuleInit() {
    // if (!this.configService.isProduction) this.sendAllNotifications();
    // if (!this.configService.isProduction) this.sendFavoritesNotifications();
    this.job = this.cronJobService.create('00 00 8,14,18 * * *', () => this.sendAllNotifications());
    this.job.start();
    this.logger.log('Product CronJob started, next execution: ' + this.job.nextDates().toString());

    this.favoritesJob = this.cronJobService.create('00 00 6,10,12,16,20 * * *', () => this.sendFavoritesNotifications());
    this.favoritesJob.start();
    this.logger.log('Favorites CronJob started, next execution: ' + this.favoritesJob.nextDates().toString());
  }

  onModuleDestroy() {
    if (this.job) {
      this.job.stop();
    }
    if (this.favoritesJob) {
      this.favoritesJob.stop();
    }
  }

  async sendAllNotifications() {
    this.logger.log('Updating all products');
    const changes = await this.productsService.updateAllProducts();
    return this.sendNotifications(changes);
  }

  async sendFavoritesNotifications() {
    this.logger.log('Updating all favorites');
    const changes = await this.productsService.updateAllFavorites();
    return this.sendNotifications(changes);
  }

  private async sendNotifications(changes: ProductChange[]) {
    this.logger.log(`Found ${changes.length} updates.`);
    const sentNotifications: Promise<any>[] = changes
      .filter(update => this.isRelevantChange(update))
      .map(update => ({userId: update.product.userId, text: this.getMarkdownUpdateText(update)}))
      .filter(update => !!update.text)
      .map(async update => {
        try {
          return await this.telegramService.notifyAboutUpdate(update.userId, update.text);
        } catch (e) {
          this.logger.error({ message: e.message, userId: update.userId }, e.stack);
        }
      });
    await Promise.all(sentNotifications);
    this.logger.log(`Sent ${sentNotifications.length} notifications.`);
  }

  private isRelevantChange(update: ProductChange) {
    const changes = update.productAttributeChanges;
    const product = update.product;
    const isRelevantChange = changes.hasPriceChange
      || changes.hasNeverBeenAvailableBefore
      || changes.hasAvailabilityChange && product.isFavorite
      || changes.hasLowInStockChange && product.isLowInStock && (changes.hasNeverBeenLowInStockBefore || product.isFavorite);
    return product.isAvailable && isRelevantChange;
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
      const priceText = update.product.price.toFixed(2);
      updateText = `is available again${lowInStockText} (${priceText}€)`;
    } else if (changes.hasLowInStockChange) {
      const priceText = update.product.price.toFixed(2);
      updateText = `is now low in stock (${priceText}€)`;
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
