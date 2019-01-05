import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ProductAttributeChange, ProductAvailabilityChange, ProductChange, ProductPriceChange } from '../products/dtos/product-change.interface';
import { ConfigService } from '../config/config.service';
import { ProductEntity } from '../products/entities/products.entity';
import { TelegramService } from '../telegram/telegram.service';
import { CronJobService } from '../common/cron-job.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class NotificationsService implements OnModuleInit {

  logger: Logger = new Logger(NotificationsService.name);

  constructor(private configService: ConfigService,
              private cronJobService: CronJobService,
              private productsService: ProductsService,
              private telegramService: TelegramService) {
  }

  onModuleInit() {
    this.sendNotificationsPerUser();
    const job = this.cronJobService.create('00 00 8,14,18 * * *', () => this.sendNotificationsPerUser());
    job.start();
    this.logger.log('Product CronJob started, next execution: ' + new Date(job.nextDates()).toString())
    ;
  }

  async sendNotificationsPerUser() {
    const changes = await this.productsService.updateAllProducts();
    const changesPerUser = new Map<string, ProductChange[]>();
    for (const change of changes) {
      this.logger.log({ message: 'Processing change:', change });
      const userChanges = changesPerUser.get(change.product.userId) || [];
      userChanges.push(change);
      changesPerUser.set(change.product.userId, userChanges);
    }
    this.sendNotifications(changesPerUser);
  }

  sendNotifications(changesPerUser: Map<string, ProductChange[]>) {
    for (const userId of changesPerUser.keys()) {
      const changes = changesPerUser.get(userId);
      const updatesText = changes
        .filter(change => change.product.isAvailable)
        .map(change => ({
          product: change.product,
          update: this.getRelevantAttributeChange(change.productAttributeChanges),
        }))
        .map(change => this.getMarkdownUpdateText(change.update, change.product))
        .forEach(async text => {
          try {
            await this.telegramService.notifyAboutUpdate(userId, text);
          } catch (e) {
            this.logger.error({ message: 'Update failed.', userId });
            this.logger.error(e.message, e.stack);
          }
        });
    }
  }

  getMarkdownUpdateText(update: ProductAttributeChange<boolean | number>, product: ProductEntity) {
    let updateText;
    if (update instanceof ProductPriceChange) {
      const prefix = update.priceDelta > 0 ? '+' : '';
      updateText = `is now at ${update.newValue.toFixed(2)}€ (${prefix}${update.priceDelta.toFixed(2)}€)`;
    } else if (update instanceof ProductAvailabilityChange) {
      updateText = `is available again`;
    } else {
      this.logger.warn({ message: 'Unknown product attribute change.', update });
      return '';
    }
    const nameLink = `[${product.name}](${this.configService.frontendDomain}/products/${product._id})`;
    return `Your product ${nameLink} ${updateText}.`;
  }

  private getRelevantAttributeChange(productAttributeChanges: Array<ProductAttributeChange<number | boolean>>)
    : ProductAttributeChange<number | boolean> | null {
    const priceChange = productAttributeChanges.find(p => p instanceof ProductPriceChange);
    if (priceChange) {
      return priceChange;
    } else {
      return productAttributeChanges[0];
    }
  }
}
