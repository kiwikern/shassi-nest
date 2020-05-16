/* eslint-disable max-classes-per-file */
import { ProductEntity } from '../entities/products.entity';

export interface ProductChange {
  product: ProductEntity;
  productAttributeChanges: ProductAttributeChanges;
}

export interface ProductAttributeChanges {
  readonly hasAnyChange: boolean;
  readonly hasPriceChange: boolean;
  readonly oldPriceValue: number;
  readonly newPriceValue: number;
  readonly hasAvailabilityChange: boolean;
  readonly hasNeverBeenAvailableBefore: boolean;
  readonly hasLowInStockChange: boolean;
  readonly hasNeverBeenLowInStockBefore: boolean;
}

export class ProductAttributeChangesBuilder {
  private hasAnyChange = false;
  private hasPriceChange = false;
  private oldPriceValue: number;
  private newPriceValue: number;
  private hasAvailabilityChange = false;
  private hasNeverBeenAvailableBefore = false;
  private hasNeverBeenLowInStockBefore = false;
  private hasLowInStockChange = false;

  setPriceChange({ oldValue, newValue }: { oldValue: number; newValue: number }) {
    this.hasAnyChange = true;
    this.hasPriceChange = true;
    this.oldPriceValue = oldValue;
    this.newPriceValue = newValue;
  }

  setAvailabilityChange(hasNeverBeenAvailableBefore: boolean) {
    this.hasAnyChange = true;
    this.hasAvailabilityChange = true;
    this.hasNeverBeenAvailableBefore = hasNeverBeenAvailableBefore;
  }

  setLowInStockChange(hasNeverBeenLowInStockBefore: boolean) {
    this.hasAnyChange = true;
    this.hasLowInStockChange = true;
    this.hasNeverBeenLowInStockBefore = hasNeverBeenLowInStockBefore;
  }

  build(): ProductAttributeChanges {
    return {
      hasAnyChange: this.hasAnyChange,
      hasPriceChange: this.hasPriceChange,
      oldPriceValue: this.oldPriceValue,
      newPriceValue: this.newPriceValue,
      hasAvailabilityChange: this.hasAvailabilityChange,
      hasNeverBeenAvailableBefore: this.hasNeverBeenAvailableBefore,
      hasLowInStockChange: this.hasLowInStockChange,
      hasNeverBeenLowInStockBefore: this.hasNeverBeenLowInStockBefore,
    };
  }

}
