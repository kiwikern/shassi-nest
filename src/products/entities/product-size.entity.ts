import { Column } from 'typeorm';

export class ProductSize {
  @Column('text')
  id: string;

  @Column('text')
  name: string;
}
