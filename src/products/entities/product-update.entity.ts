import { Column, ObjectIdColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export class ProductUpdate {
  @ObjectIdColumn()
  @Exclude()
  id?: string;

  @Column('number')
  price: number;

  @Column('boolean')
  isAvailable: boolean;
}
