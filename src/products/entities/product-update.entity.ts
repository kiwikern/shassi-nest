import { Column, CreateDateColumn } from 'typeorm';

export class ProductUpdate {
  @CreateDateColumn()
  createdAt: Date;

  @Column('number')
  price: number;

  @Column('boolean')
  isAvailable: boolean;
}
