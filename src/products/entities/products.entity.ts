import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { ProductSize } from './product-size.entity';
import { ProductUpdate } from './product-update.entity';
import { ObjectID } from 'mongodb';
import { Logger } from '@nestjs/common';
import { ApiModelProperty } from '@nestjs/swagger';
import { toObjectId, toStringSafe, typeFn } from '../../common/utils';

@Entity({ name: 'products' })
export class ProductEntity {
  @ObjectIdColumn()
  @Transform(toStringSafe, { toPlainOnly: true })
  @Transform(toObjectId, { toClassOnly: true })
  @ApiModelProperty()
    // tslint:disable-next-line:variable-name
  _id: ObjectID;

  @Column()
  @ApiModelProperty()
  url: string;

  @Column()
  @ApiModelProperty()
  name: string;

  @Column()
  @Transform(toStringSafe, { toPlainOnly: true })
  @Transform(toObjectId, { toClassOnly: true })
  @ApiModelProperty()
  userId: ObjectID;

  @Exclude({ toPlainOnly: true })
  @Column(typeFn(ProductSize))
  @Type(typeFn(ProductSize))
  size: ProductSize;

  // TODO: Why does default value not work?
  @Column({ default: true })
  @ApiModelProperty()
  isActive: boolean = true;

  @Column({ default: false })
  @ApiModelProperty()
  hasUnreadUpdate: boolean = false;

  @Column(typeFn(ProductUpdate))
  @ApiModelProperty()
  updates: ProductUpdate[];

  @Expose({ name: 'price' })
  @ApiModelProperty()
  get price(): number {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.price : null;
  }

  @Expose({ name: 'isAvailable' })
  @ApiModelProperty()
  get isAvailable(): boolean {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.isAvailable : false;
  }

  @Expose({ name: 'isLowInStock' })
  @ApiModelProperty()
  get isLowInStock(): boolean {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.isLowInStock === true : false;
  }

  @Expose({ name: 'createdAt' })
  @ApiModelProperty()
  // Cannot be getter due to https://github.com/typeorm/typeorm/issues/3466
  getCreatedAt(): Date {
    return this._id ? this._id.getTimestamp() : null;
  }

  @Expose({ name: 'updatedAt' })
  @ApiModelProperty()
  get updatedAt(): Date {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.createdAt : this.getCreatedAt();
  }

  @Expose({ name: 'sizeName' })
  @ApiModelProperty()
  get sizeName(): string {
    return this.size ? this.size.name : '';
  }

  @Expose({ name: 'store' })
  @ApiModelProperty({ enum: ['H&M', 'ASOS', 'Weekday', 'ABOUT YOU', 'COS', 'Amazon'] })
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
