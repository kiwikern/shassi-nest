import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { ProductSize } from './product-size.entity';
import { ProductUpdate } from './product-update.entity';
import { ObjectID } from 'mongodb';
import { Logger } from '@nestjs/common';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity({ name: 'products' })
export class ProductEntity {
  @ObjectIdColumn()
  @Transform((value) => value.toString(), { toPlainOnly: true })
  @Transform((value) => typeof value === 'string' ? new ObjectID(value) : value, { toClassOnly: true })
  @ApiModelProperty()
    // tslint:disable-next-line:variable-name
  _id: ObjectID;

  // @Index({unique: true})
  @Column()
  @ApiModelProperty()
  url: string;

  @Column()
  @ApiModelProperty()
  name: string;

  @Column()
  @Transform((value) => value ? value.toString() : null, { toPlainOnly: true })
  @ApiModelProperty()
  userId: ObjectID;

  @Exclude({toPlainOnly: true})
  @Column(() => ProductSize)
  @Type(() => ProductSize)
  size: ProductSize;

  // TODO: Why does default value not work?
  @Column({ default: true})
  @ApiModelProperty()
  isActive: boolean = true;

  @Column({ default: false })
  @ApiModelProperty()
  hasUnreadUpdate: boolean = false;

  @Column(() => ProductUpdate)
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

  @Expose({ name: 'createdAt' })
  @ApiModelProperty()
  get createdAt(): Date {
    return this._id.getTimestamp();
  }

  @Expose({ name: 'updatedAt' })
  @ApiModelProperty()
  get updatedAt(): Date {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.createdAt : this.createdAt;
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
