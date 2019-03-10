import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { ProductChange } from '../products/dtos/product-change.interface';
import { TelegramService } from '../telegram/telegram.service';
import { ConfigService } from '../config/config.service';
import { CronJobService } from '../common/cron-job.service';
import { MockType } from '../../test/mock.type';
import { ProductsService } from '../products/products.service';
import { InternalServerErrorException } from '@nestjs/common';
import { cronJobServiceFactory, productsServiceFactory, telegramServiceFactory } from '../../test/mocks/jest-mocks';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('NotificationsService', () => {
  let service: NotificationsService;
  let productsService: MockType<ProductsService>;
  let cronJobService: MockType<CronJobService>;
  let telegramService: MockType<TelegramService>;

  beforeEach(async () => {
    const configService = { frontendDomain: 'domain' };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationsService,
        { provide: TelegramService, useFactory: telegramServiceFactory },
        { provide: ProductsService, useFactory: productsServiceFactory },
        { provide: ConfigService, useValue: configService },
        { provide: CronJobService, useFactory: cronJobServiceFactory },
      ],
    }).compile();
    module.useLogger(new NoOpLogger());
    service = module.get<NotificationsService>(NotificationsService);
    productsService = module.get(ProductsService);
    cronJobService = module.get(CronJobService);
    telegramService = module.get(TelegramService);
  });

  describe('should send only relevant notifications', () => {

    it('should notify about a price increase with low stock', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', name: 'name', _id: 'id', isAvailable: true, isLowInStock: true, url: 'myurl' } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: false,
            hasNeverBeenAvailableBefore: false,
            hasLowInStockChange: true,
            hasPriceChange: true,
            newPriceValue: 100,
            oldPriceValue: 90,
          },
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);

      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).toHaveBeenNthCalledWith(1,
        'userId',
        'Your [product](myurl) [name](domain/products/id) is now at 100.00€ (+10.00€, low in stock). 👚');
      expect(telegramService.notifyAboutUpdate).toHaveBeenCalledTimes(1);
    });

    it('should notify about a price decrease not low in stock', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', isAvailable: true } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: true,
            hasNeverBeenAvailableBefore: false,
            hasLowInStockChange: false,
            hasPriceChange: true,
            newPriceValue: 90,
            oldPriceValue: 100,
          },
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).toHaveBeenNthCalledWith(1,
        'userId',
        'Your [product](undefined) [undefined](domain/products/undefined) is now at 90.00€ (-10.00€). 👚');
      expect(telegramService.notifyAboutUpdate).toHaveBeenCalledTimes(1);
    });

    it('should not notify about price change when product is not available', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', isAvailable: false } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: false,
            hasNeverBeenAvailableBefore: false,
            hasLowInStockChange: true,
            hasPriceChange: true,
            newPriceValue: 100,
            oldPriceValue: 90,
          },
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).not.toHaveBeenCalled();
    });

    it('should notify about low in stock change when low in stock', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', isAvailable: true, isLowInStock: true } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: false,
            hasNeverBeenAvailableBefore: false,
            hasLowInStockChange: true,
            hasPriceChange: false,
          } as any,
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).toHaveBeenNthCalledWith(1,
        'userId',
        'Your [product](undefined) [undefined](domain/products/undefined) is now low in stock. 👚');
      expect(telegramService.notifyAboutUpdate).toHaveBeenCalledTimes(1);
    });

    it('should not notify about low in stock change when not low in stock', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', isAvailable: true, isLowInStock: false } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: true,
            hasNeverBeenAvailableBefore: false,
            hasLowInStockChange: true,
            hasPriceChange: false,
          } as any,
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).not.toHaveBeenCalled();
    });

    it('should notify about first availability change with low in stock', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', isAvailable: true, isLowInStock: true } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: true,
            hasNeverBeenAvailableBefore: true,
            hasLowInStockChange: true,
            hasPriceChange: false,
          } as any,
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).toHaveBeenNthCalledWith(1,
        'userId',
        'Your [product](undefined) [undefined](domain/products/undefined) is available again and low in stock. 👚');
      expect(telegramService.notifyAboutUpdate).toHaveBeenCalledTimes(1);
    });

    it('should notify about first availability change not low in stock', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', isAvailable: true, isLowInStock: false } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: true,
            hasNeverBeenAvailableBefore: true,
            hasLowInStockChange: false,
            hasPriceChange: false,
          } as any,
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).toHaveBeenNthCalledWith(1,
        'userId',
        'Your [product](undefined) [undefined](domain/products/undefined) is available again. 👚');
      expect(telegramService.notifyAboutUpdate).toHaveBeenCalledTimes(1);
    });

    it('should notify about low in stock change when low in stock', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', isAvailable: true, isLowInStock: true } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: false,
            hasNeverBeenAvailableBefore: false,
            hasLowInStockChange: true,
            hasPriceChange: false,
          } as any,
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).toHaveBeenNthCalledWith(1,
        'userId',
        'Your [product](undefined) [undefined](domain/products/undefined) is now low in stock. 👚');
      expect(telegramService.notifyAboutUpdate).toHaveBeenCalledTimes(1);
    });

    it('should not notify about low in stock change when not low in stock', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', isAvailable: true, isLowInStock: false } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: false,
            hasNeverBeenAvailableBefore: false,
            hasLowInStockChange: true,
            hasPriceChange: false,
          } as any,
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).not.toHaveBeenCalled();
    });

    it('should handle unknown change', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', isAvailable: true, isLowInStock: false } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: false,
            hasNeverBeenAvailableBefore: true,
            hasPriceChange: false,
            hasLowInStockChange: false,
          } as any,
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).not.toHaveBeenCalled();
    });

    it('should handle empty changes', async () => {
      productsService.updateAllProducts.mockReturnValue([]);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).not.toHaveBeenCalled();
    });

    it('should handle multiple changes', async () => {
      const changes: ProductChange[] = [
        {
          product: { userId: 'userId', isAvailable: true, isLowInStock: true } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: true,
            hasNeverBeenAvailableBefore: true,
            hasLowInStockChange: true,
            hasPriceChange: false,
          } as any,
        },
        {
          product: { userId: 'userId', isAvailable: true, isLowInStock: false } as any,
          productAttributeChanges: {
            hasAnyChange: true,
            hasAvailabilityChange: true,
            hasNeverBeenAvailableBefore: true,
            hasLowInStockChange: true,
          } as any,
        },
      ];
      telegramService.notifyAboutUpdate.mockImplementation(() => {
        throw new InternalServerErrorException();
      });
      productsService.updateAllProducts.mockReturnValue(changes);
      await service.sendNotificationsPerUser();
      expect(telegramService.notifyAboutUpdate).toHaveBeenNthCalledWith(1,
        'userId',
        'Your [product](undefined) [undefined](domain/products/undefined) is available again and low in stock. 👚');
      expect(telegramService.notifyAboutUpdate).toHaveBeenNthCalledWith(2,
        'userId',
        'Your [product](undefined) [undefined](domain/products/undefined) is available again. 👚');
      expect(telegramService.notifyAboutUpdate).toHaveBeenCalledTimes(2);
    });

  });

  describe('CronJob', () => {

    it('should start and stop the cron job', async () => {
      service.onModuleInit();
      expect(cronJobService.create).toHaveBeenCalled();
      service.onModuleDestroy();
    });

    it('should handle cleanup of not-started cron job', async () => {
      expect(() => service.onModuleDestroy()).not.toThrow();
    });

  });

});
