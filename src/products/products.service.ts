import { ConflictException, ForbiddenException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductEntity } from './entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, MongoRepository, ObjectID as TObjectID, Repository } from 'typeorm';
import { CrawlerService } from '../crawler/crawler.service';
import { ObjectID } from 'mongodb';
import { ProductSizeAvailability } from '../crawler/product-size.interface';
import { ProductAttributeChanges, ProductAttributeChangesBuilder, ProductChange } from './dtos/product-change.interface';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProductUpdate } from './entities/product-update.entity';

@Injectable()
export class ProductsService {

  private readonly logger: Logger = new Logger(ProductsService.name);

  constructor(
    @InjectRepository(ProductEntity) private readonly productRepository: MongoRepository<ProductEntity>,
    private readonly crawlerService: CrawlerService,
  ) {
  }

  /**
   * Get all products for given user.
   * @param userId
   */
  async getProducts(userId: ObjectID): Promise<ProductEntity[]> {
    return this.productRepository.find({ where: { userId }, order: { _id: 'DESC' } });
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
    const duplicateSearchOptions = { 'url': product.url, 'size.id': product.size.id, userId };
    if (!!await this.productRepository.findOne(duplicateSearchOptions)) {
      throw new ConflictException('This product has already been added in the given size.');
    }

    const newProduct: ProductEntity = this.productRepository.create(product);
    newProduct.userId = userId;
    const firstUpdate = await this.crawlerService.getUpdateData(product.url, product.size.id);
    newProduct.updates = [firstUpdate];
    return this.productRepository.save(newProduct);
  }

  async updateAllProducts(): Promise<ProductChange[]> {
    const products: ProductEntity[] = await this.productRepository.find({ isActive: true });
    return this.updateProducts(products);
  }

  async updateAllFavorites(): Promise<ProductChange[]> {
    const products: ProductEntity[] = await this.productRepository.find({ isActive: true, isFavorite: true });
    return this.updateProducts(products);
  }

  private async updateProducts(products: ProductEntity[]) {
    // TODO: Use concurrency control
    // const updatedProducts = (await Promise.all(products
    //   .map(product => this.updateProduct(product))))
    //   .filter(updatedProduct => !!updatedProduct);
    const updatedProducts = [];
    for (const product of products) {
      const update = await this.updateProduct(product);
      if (update) {
        updatedProducts.push(update);
      }
      await of('').pipe(delay(200)).toPromise();
    }

    return updatedProducts;
  }

  async updateSingleProduct(userId: ObjectID, productId: ObjectID): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({ _id: productId, userId });
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    await this.updateProduct(product);
    return this.productRepository.findOne(productId as TObjectID);
  }

  private async updateProduct(product: ProductEntity): Promise<ProductChange | null> {
    try {
      const sizeId = product.size ? product.size.id : null;
      const newUpdate = await this.crawlerService.getUpdateData(product.url, sizeId);
      const productAttributeChanges = this.getProductAttributeChanges(product, newUpdate);
      // reset errors after successful update
      product.errors = [];
      if (productAttributeChanges.hasAnyChange) {
        product.updates.push(newUpdate);
        product.hasUnreadUpdate = true;
        const updatedProduct = await this.productRepository.save(product);
        return { product: updatedProduct, productAttributeChanges };
      } else {
        // save empty error list
        await this.productRepository.save(product);
      }
    } catch (error) {
      let message;
      if (error && error.message && error.message.message) {
        message = error.message.message;
      } else {
        message = error.message;
      }
      product.errors.push(message);
      if (error instanceof NotFoundException) {
        product.isActive = false;
      } else if (product.errors.length >= 3) {
        product.isActive = false;
        this.logger.error({
          message: 'Failed to update product more than 2 times. Set to inactive.',
          error: message,
          product,
        }, error.stack);
      } else {
        this.logger.error({
          message: 'Failed to update product.',
          error: message,
          product,
        }, error.stack);
      }
      await this.productRepository.save(product);
    }
  }

  private getProductAttributeChanges(product: ProductEntity, update: ProductUpdate): ProductAttributeChanges {

    const changesBuilder = new ProductAttributeChangesBuilder();

    if (product.price !== update.price) {
      changesBuilder.setPriceChange({
        oldValue: product.price,
        newValue: update.price,
      });
    }

    if (product.isAvailable !== update.isAvailable) {
      const latestUpdateWhenAvailable = product.updates.slice().reverse().find(p => p.isAvailable);
      changesBuilder.setAvailabilityChange(!latestUpdateWhenAvailable);
      if (latestUpdateWhenAvailable && latestUpdateWhenAvailable.price !== update.price) {
        changesBuilder.setPriceChange({
          oldValue: latestUpdateWhenAvailable.price,
          newValue: update.price,
        });
      }
    }

    if (product.isLowInStock !== update.isLowInStock) {
      const latestUpdateWhenLowInStock = product.updates.find(p => p.isLowInStock);
      changesBuilder.setLowInStockChange(!latestUpdateWhenLowInStock);
    }

    return changesBuilder.build();
  }

  async markRead(userId: ObjectID, productId: ObjectID): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({ _id: productId, userId });
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    product.hasUnreadUpdate = false;
    return this.productRepository.save(product);
  }

  async setFavorite(userId: ObjectID, productId: ObjectID, isFavorite: boolean) {
    const product = await this.productRepository.findOne({ _id: productId, userId });
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    const favorites = await this.productRepository.find({ userId, isFavorite: true });
    if (isFavorite && favorites.length >= 3) {
      throw new ForbiddenException('You have exceeded your favorites limit of three.');
    }
    product.isFavorite = isFavorite;
    return this.productRepository.save(product);
  }

  async deleteProduct(userId: ObjectID, productId: ObjectID): Promise<boolean> {
    const product = await this.productRepository.findOne({ _id: productId, userId });
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    return this.productRepository.delete({ _id: productId, userId })
      .then(() => true);
  }

  async findProductsWithErrors(): Promise<ProductEntity[]> {
    /* FIXME: Type FindConditions<ProductEntity> invalid
       see https://github.com/typeorm/typeorm/issues/3760 */
    const findConditions: any = { errors: { $exists: true, $ne: []} };
    return this.productRepository.find(findConditions);
  }

  async reactivateProduct(productId: ObjectID): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({ _id: productId });
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    product.isActive = true;
    await this.updateProduct(product);
    return this.productRepository.findOne(product._id);
  }
}
