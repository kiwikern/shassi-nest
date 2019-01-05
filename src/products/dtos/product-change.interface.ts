/* tslint:disable:max-classes-per-file */
import { ProductEntity } from '../entities/products.entity';

export interface ProductChange {
  product: ProductEntity;
  productAttributeChanges: Array<ProductAttributeChange<number | boolean>>;
}

export interface ProductAttributeChange<AttributeType> {
  attributeName: string;
  oldValue: AttributeType;
  newValue: AttributeType;
}

export class ProductPriceChange implements ProductAttributeChange<number> {
  attributeName = 'price';
  newValue: number;
  oldValue: number;
  priceDelta: number;

  constructor({ oldValue, newValue }) {
    this.oldValue = oldValue;
    this.newValue = newValue;
    this.priceDelta = this.newValue - this.oldValue;
  }
}

export class ProductAvailabilityChange implements ProductAttributeChange<boolean> {
  attributeName = 'isAvailable';
  newValue: boolean;
  oldValue: boolean;

  constructor({ oldValue, newValue }) {
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
}
