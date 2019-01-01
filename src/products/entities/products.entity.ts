import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';
import { Exclude, Expose, Transform } from 'class-transformer';
import { ProductSize } from './product-size.entity';
import { ProductUpdate } from './product-update.entity';
import { ObjectID } from 'mongodb';
import { Logger } from '@nestjs/common';

@Entity({ name: 'products' })
export class ProductEntity {
  @ObjectIdColumn()
  @Transform((value) => value.toString(), { toPlainOnly: true })
    // tslint:disable-next-line:variable-name
  _id: ObjectID;

  // @Index({unique: true})
  @Column()
  url: string;

  @Column()
  name: string;

  @Column('text')
  @Transform((value) => value ? value.toString() : null, { toPlainOnly: true })
  userId: ObjectID;

  @Exclude()
  @Column(type => ProductSize)
  size: ProductSize;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  hasUnreadUpdate: boolean;

  @Column(type => ProductUpdate)
  updates: ProductUpdate[];

  @Expose({ name: 'price' })
  getPrice(): number {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.price : null;
  }

  @Expose({ name: 'isAvailable' })
  isAvailable(): boolean {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.isAvailable : false;
  }

  @Expose({ name: 'createdAt' })
  getCreationDate(): Date {
    return this._id.getTimestamp();
  }

  @Expose({ name: 'updatedAt' })
  getUpdateDate(): Date {
    const latestUpdate = this.getLatestUpdate();
    // TODO: Create date manually
    return latestUpdate ? latestUpdate.createdAt : this.getCreationDate();
  }

  @Expose({ name: 'sizeName' })
  getSizeName() {
    return this.size ? this.size.name : '';
  }

  @Expose({name: 'store'})
  getStoreName() {
    if (this.url.includes('hm.com')) {
      return 'H&M';
    } else if (this.url.includes('asos')) {
      return 'ASOS';
    } else if (this.url.includes('weekday.')) {
      return 'Weekday';
    } else if (this.url.includes('cosstores')) {
      return 'COS';
    } else if (this.url.includes('aboutyou')) {
      return 'ABOUT YOU';
    } else if (this.url.includes('amazon')) {
      return 'Amazon';
    } else {
      Logger.warn('Could not find store for URL', this.url);
      return '';
    }
  }

  private getLatestUpdate() {
    const updates = this.updates || [];
    return updates[updates.length - 1];
  }
}
