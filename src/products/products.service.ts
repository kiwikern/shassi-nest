import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrawlerService } from '../crawler/crawler.service';
import { ObjectID } from 'mongodb';

@Injectable()
export class ProductsService {

  private readonly logger: Logger = new Logger(ProductsService.name);

  constructor(
    @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>,
    private readonly crawlerService: CrawlerService,
  ) {
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
  async initializeProduct(productUrl: string) {
    return this.crawlerService.getInitData(productUrl);
  }

  /**
   * Product is saved in database with first update.
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
    const products: ProductEntity[] = await this.productRepository.find();
    // TODO: Should this be processed in parallel?
    const updatedProducts = products.map(async product => {
      try {
        return await this.updateProduct(product);
      } catch (error) {
        this.logger.error({ message: 'Failed to update product.', error, product });
      }
    })
      .filter(p => !!p);
    // TODO: Notify about updates.
  }

  private async updateProduct(product: ProductEntity) {
    const latestUpdate = await this.crawlerService.getUpdateData(product.url, product.size.id);
    const hasPriceChanged = product.getPrice() === latestUpdate.price;
    const hasAvailabilityChanged = product.isAvailable() === latestUpdate.isAvailable;
    const hasChange = hasPriceChanged || hasAvailabilityChanged;
    if (hasChange) {
      product.updates.push(latestUpdate);
      product.hasUnreadUpdate = true;
      await this.productRepository.update({ _id: product._id }, product);
      return product;
    }
  }

  async markRead(userId: ObjectID, productId: ObjectID): Promise<ProductEntity> {
    const product: any = await this.productRepository.findOne({ _id: productId, userId });
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    product.hasUnreadUpdate = false;
    // await this.productRepository.update({ _id: productId, userId }, { hasUnreadUpdate: false });
    // return product;
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
