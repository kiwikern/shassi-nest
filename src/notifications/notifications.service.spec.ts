import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { ProductAvailabilityChange, ProductChange, ProductPriceChange } from '../products/dtos/product-change.interface';
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

  it('should be defined', () => {
    // TODO: Write tests for missing methods
    const changes: ProductChange[] = [
      {
        product: { userId: 'userId', name: 'name', isAvailable: true } as any,
        productAttributeChanges: [new ProductPriceChange({ newValue: 100, oldValue: 90 })] as any,
      },
      {
        product: { userId: 'userId', isAvailable: true } as any,
        productAttributeChanges: [
          new ProductAvailabilityChange({ newValue: true, oldValue: false }),
          new ProductPriceChange({ newValue: 90, oldValue: 100 }),
        ] as any,
      },
      {
        product: { userId: 'userId', isAvailable: true } as any,
        productAttributeChanges: [new ProductAvailabilityChange({ newValue: true, oldValue: false })] as any,
      },
      {
        product: { userId: 'userId', isAvailable: true } as any,
        productAttributeChanges: [new ProductAvailabilityChange({ newValue: false, oldValue: true })] as any,
      },
      {
        product: { userId: 'userId', isAvailable: true } as any,
        productAttributeChanges: [{ newValue: 'new', oldValue: 'old' }] as any,
      },
    ];
    telegramService.notifyAboutUpdate.mockImplementation(() => {
      throw new InternalServerErrorException();
    });
    productsService.updateAllProducts.mockReturnValue(changes);
    expect(service.sendNotificationsPerUser()).toBeDefined();
    // expect(telegramService.notifyAboutUpdate).toBeCalledWith('userId',
    //   'Your product [name](domain/products/id) is now at 90.00€ (-10.00€).');
  });

  it('should formulate update text for price decrease', () => {
    const update = new ProductPriceChange({ oldValue: 100, newValue: 90 });
    const product: any = { _id: 'id', name: 'name' };
    const updateText = 'Your product [name](domain/products/id) is now at 90.00€ (-10.00€).';
    expect(service.getMarkdownUpdateText(update, product)).toBe(updateText);
  });

  it('should formulate update text for price increase', () => {
    const update = new ProductPriceChange({ oldValue: 100, newValue: 110 });
    const product: any = { _id: 'id', name: 'name' };
    const updateText = 'Your product [name](domain/products/id) is now at 110.00€ (+10.00€).';
    expect(service.getMarkdownUpdateText(update, product)).toBe(updateText);
  });

  it('should formulate text for availability change', () => {
    const update = new ProductAvailabilityChange({ oldValue: false, newValue: true });
    const product: any = { _id: 'id', name: 'name' };
    const updateText = 'Your product [name](domain/products/id) is available again.';
    expect(service.getMarkdownUpdateText(update, product)).toBe(updateText);
  });

  it('should setup the cronjob', async () => {
    service.onModuleInit();
    expect(cronJobService.create).toHaveBeenCalled();
  });

});
