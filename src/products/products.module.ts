import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/products.entity';
import { CrawlerModule } from '../crawler/crawler.module';
import { CronJob } from 'cron';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    CrawlerModule,
  ],
})
export class ProductsModule implements OnModuleInit {

  logger: Logger = new Logger(ProductsModule.name);

  constructor(private productsService: ProductsService) {
  }

  onModuleInit() {
    const job = new CronJob('00 00 8,14,18 * * *',
      () => this.productsService.updateAllProducts());
    job.start();
    this.logger.log('Product CronJob started, next execution: ' + new Date(job.nextDates()).toString())
    ;
  }
}
