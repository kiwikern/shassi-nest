import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/products.entity';
import { CrawlerModule } from '../crawler/crawler.module';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    CrawlerModule,
    CommonModule,
  ],
  exports: [ProductsService],
})
export class ProductsModule {

}
