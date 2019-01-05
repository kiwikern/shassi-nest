import { ConflictException, Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrawlerService } from '../crawler/crawler.service';
import { ObjectID } from 'mongodb';
import { ProductSizeAvailability } from '../crawler/product-size.interface';
import { CronJobService } from '../common/cron-job.service';

@Injectable()
export class ProductsService implements OnModuleInit {

  private readonly logger: Logger = new Logger(ProductsService.name);

  constructor(
    @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>,
    private readonly crawlerService: CrawlerService,
    private readonly cronJobService: CronJobService,
  ) {
  }

  onModuleInit() {
    const job = this.cronJobService.create('00 00 8,14,18 * * *', () => this.updateAllProducts());
    job.start();
    this.logger.log('Product CronJob started, next execution: ' + new Date(job.nextDates()).toString())
    ;
  }

  /**
   * Get all active products for given user.
   * @param userId
   */
  async getProducts(userId: ObjectID): Promise<ProductEntity[]> {
    return this.productRepository.find({ userId });
  }

  /**
   * Product is not yet saved in database.
   * @param productUrl
   */
  async initializeProduct(productUrl: string): Promise<{ sizes: ProductSizeAvailability[]; name: string; url: string }> {
    return this.crawlerService.getInitData(productUrl);
  }

  /**
   * Product is saved in database with first update.
   * <code>initializeProduct</code> should be called first to create <code>CreateProductDto</code>.
   * @param userId
   * @param product
   */
  async addProduct(userId: ObjectID, product: CreateProductDto): Promise<ProductEntity> {
    const duplicateSearchOptions = { 'url': product.url, 'size.id': product.size.id };
    if (!!await this.productRepository.findOne(duplicateSearchOptions)) {
      throw new ConflictException('This product has already been added in the given size.');
    }

    const newProduct: ProductEntity = this.productRepository.create();
    Object.assign(newProduct, product);
    newProduct.userId = userId;
    const firstUpdate = await this.crawlerService.getUpdateData(product.url, product.size.id);
    newProduct.updates = [firstUpdate];
    return this.productRepository.save(newProduct);
  }

  async updateAllProducts() {
    const products: ProductEntity[] = await this.productRepository.find({ isActive: true });
    // TODO: Use concurrency control
    const updatedProducts = (await Promise.all(products
      .map(product => this.updateProduct(product))))
      .filter(updatedProduct => !!updatedProduct);
    this.logger.log({ updatedProducts });
    // TODO: Notify about updates.
    return updatedProducts;
  }

  private async updateProduct(product: ProductEntity) {
    try {
      const latestUpdate = await this.crawlerService.getUpdateData(product.url, product.size.id);
      const hasPriceChanged = product.price !== latestUpdate.price;
      const hasAvailabilityChanged = product.isAvailable !== latestUpdate.isAvailable;
      const hasChange = hasPriceChanged || hasAvailabilityChanged;
      if (hasChange) {
        product.updates.push(latestUpdate);
        product.hasUnreadUpdate = true;
        return await this.productRepository.save(product);
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        product.isActive = false;
        await this.productRepository.save(product);
      } else {
        this.logger.error({ message: 'Failed to update product.', error: error.toString(), product });
      }
    }
  }

  async markRead(userId: ObjectID, productId: ObjectID): Promise<ProductEntity> {
    const product: any = await this.productRepository.findOne({ _id: productId, userId });
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    product.hasUnreadUpdate = false;
    return this.productRepository.save(product);
  }

  async deleteProduct(userId: ObjectID, productId: ObjectID): Promise<boolean> {
    const product: any = await this.productRepository.findOne({ _id: productId, userId });
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    return this.productRepository.delete({ _id: productId, userId })
      .then(() => true);
  }

}
