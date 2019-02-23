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

  beforeAll(async () => {
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

  it('should send only relevant notifications', async () => {
    const changes: ProductChange[] = [
      {
        product: { userId: 'userId', name: 'name', _id: 'id', isAvailable: true } as any,
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: false,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: true,
          newPriceValue: 100,
          oldPriceValue: 90,
        },
      },
      {
        product: { userId: 'userId', isAvailable: true } as any,
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: true,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: true,
          newPriceValue: 90,
          oldPriceValue: 100,
        },
      },
      {
        product: { userId: 'userId', isAvailable: false } as any,
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: false,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: true,
          newPriceValue: 100,
          oldPriceValue: 90,
        },
      },
      {
        product: { userId: 'userId', isAvailable: true } as any,
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: true,
          hasNeverBeenAvailableBefore: false,
          hasPriceChange: false,
        } as any,
      },
      {
        product: { userId: 'userId', isAvailable: true } as any,
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: true,
          hasNeverBeenAvailableBefore: true,
          hasPriceChange: false,
        } as any,
      },
      {
        product: { userId: 'userId', isAvailable: true } as any,
        productAttributeChanges: {
          hasAnyChange: true,
          hasAvailabilityChange: false,
          hasNeverBeenAvailableBefore: true,
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
      'Your product [name](domain/products/id) is now at 100.00€ (+10.00€).');
    expect(telegramService.notifyAboutUpdate).toHaveBeenNthCalledWith(2,
      'userId',
      'Your product [undefined](domain/products/undefined) is now at 90.00€ (-10.00€).');
    expect(telegramService.notifyAboutUpdate).toHaveBeenNthCalledWith(3,
      'userId',
      'Your product [undefined](domain/products/undefined) is available again.');
    expect(telegramService.notifyAboutUpdate).toHaveBeenCalledTimes(3);
  });

  it('should setup the cronjob', async () => {
    service.onModuleInit();
    expect(cronJobService.create).toHaveBeenCalled();
  });

});
