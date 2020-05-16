import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { UsProductSize } from './us2-product-size.entity';
import { UsProductUpdate } from './us2-product-update.entity';
import { ObjectID } from 'mongodb';
import { Logger } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { toObjectId, toStringSafe } from '../src/common/utils';

@Entity({ name: 'products' })
export class UsProductEntity {
  @ObjectIdColumn()
  @Transform(toStringSafe, { toPlainOnly: true })
  @Transform(toObjectId, { toClassOnly: true })
  @ApiProperty()
  // tslint:disable-next-line:variable-name
  _id: ObjectID;

  // @Index({unique: true})
  @Column()
  @ApiProperty()
  url: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @Transform(value => (value ? value.toString() : null), { toPlainOnly: true })
  @ApiProperty()
  userId: ObjectID;

  @Exclude({ toPlainOnly: true })
  @Column(() => UsProductSize)
  @Type(() => UsProductSize)
  size: UsProductSize;

  @Column({ default: true })
  @ApiProperty()
  isActive = true;

  @Column({ default: false })
  @ApiProperty()
  hasUnreadUpdate = false;

  @Column(() => UsProductUpdate)
  @ApiProperty()
  updates: UsProductUpdate[];

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

  @Expose({ name: 'createdAt' })
  @ApiProperty()
  get createdAt(): Date {
    return this._id.getTimestamp();
  }

  @Expose({ name: 'updatedAt' })
  @ApiProperty()
  get updatedAt(): Date {
    const latestUpdate = this.getLatestUpdate();
    return latestUpdate ? latestUpdate.createdAt : this.createdAt;
  }

  @Expose({ name: 'sizeName' })
  @ApiProperty()
  get sizeName(): string {
    return this.size ? this.size.name : '';
  }

  @Expose({ name: 'store' })
  @ApiProperty({
    enum: ['H&M', 'ASOS', 'Weekday', 'ABOUT YOU', 'COS', 'Amazon'],
  })
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
