import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { ProductSize } from './product-size.entity';
import { ProductUpdate } from './product-update.entity';
import { ObjectID } from 'mongodb';
import { Logger } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { toObjectId, toStringSafe, typeFn } from '../../common/utils';

@Entity({ name: 'products' })
export class ProductEntity {
  @ObjectIdColumn()
  @Transform(toStringSafe, { toPlainOnly: true })
  @Transform(toObjectId, { toClassOnly: true })
  @ApiProperty()
    // eslint-disable-line camelcase, no-underscore-dangle, id-blacklist, id-match
  _id: ObjectID;

  @Column()
  @ApiProperty()
  url: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @Transform(toStringSafe, { toPlainOnly: true })
  @Transform(toObjectId, { toClassOnly: true })
  @ApiProperty()
  userId: ObjectID;

  @Exclude({ toPlainOnly: true })
  @Column(typeFn(ProductSize))
  @Type(typeFn(ProductSize))
  size: ProductSize;

  @Column({ default: true })
  @ApiProperty()
  isActive = true;

  @Column({ default: false })
  @ApiProperty()
  hasUnreadUpdate = false;

  @Column(typeFn(ProductUpdate))
  @ApiProperty()
  updates: ProductUpdate[];

  @Column({ default: [] })
  @Exclude()
  errors: string[] = [];

  @Column({ default: false })
  @ApiProperty()
  isFavorite = false;

  @Expose({ name: 'price' })
  @ApiProperty()
  get price(): number {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.price : null;
  }

  @Expose({ name: 'isAvailable' })
  @ApiProperty()
  get isAvailable(): boolean {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.isAvailable : false;
  }

  @Expose({ name: 'isLowInStock' })
  @ApiProperty()
  get isLowInStock(): boolean {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.isLowInStock === true : false;
  }

  @Expose({ name: 'createdAt' })
  @ApiProperty()
  // Cannot be getter due to https://github.com/typeorm/typeorm/issues/3466
  getCreatedAt(): Date {
    return this._id ? this._id.getTimestamp() : null;
  }

  @Expose({ name: 'updatedAt' })
  @ApiProperty()
  get updatedAt(): Date {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.createdAt : this.getCreatedAt();
  }

  @Expose({ name: 'sizeName' })
  @ApiProperty()
  get sizeName(): string {
    return this.size ? this.size.name : '';
  }

  // TODO: Mapping between URLs and Stores as Dictionary
  @Expose({ name: 'store' })
  @ApiProperty({ enum: ['H&M', 'ASOS', 'Weekday', 'COS', 'ABOUT YOU', 'Amazon', 'Zalando', '& Other Stories', 'Snipes', 'Arket'] })
  get store(): string {
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
    } else if (this.url.includes('zalando')) {
      return 'Zalando';
    } else if (this.url.includes('stories')) {
      return '& Other Stories';
    } else if (this.url.includes('snipes.com')) {
      return 'Snipes';
    } else if (this.url.includes('arket.com')) {
      return 'Arket';
    } else {
      new Logger(ProductEntity.name).warn('Could not find store for URL', this.url);
      return '';
    }
  }

  private getLatestUpdate() {
    const updates = this.updates || [];
    return updates[updates.length - 1];
  }
}
