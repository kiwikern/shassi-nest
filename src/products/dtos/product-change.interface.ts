/* tslint:disable:max-classes-per-file */
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
}

export class ProductAttributeChangesBuilder {
  private hasAnyChange: boolean = false;
  private hasPriceChange: boolean = false;
  private oldPriceValue: number;
  private newPriceValue: number;
  private hasAvailabilityChange: boolean = false;
  private hasNeverBeenAvailableBefore: boolean = false;

  setPriceChange({ oldValue, newValue }: { oldValue: number, newValue: number }) {
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

  build(): ProductAttributeChanges {
    return {
      hasAnyChange: this.hasAnyChange,
      hasPriceChange: this.hasPriceChange,
      oldPriceValue: this.oldPriceValue,
      newPriceValue: this.newPriceValue,
      hasAvailabilityChange: this.hasAvailabilityChange,
      hasNeverBeenAvailableBefore: this.hasNeverBeenAvailableBefore,
    };
  }

}
