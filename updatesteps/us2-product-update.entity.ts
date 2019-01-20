import { Column, CreateDateColumn, ObjectID, ObjectIdColumn } from 'typeorm';

export class UsProductUpdate {
  @CreateDateColumn()
  createdAt: Date;

  @Column('number')
  price: number;

  @Column('boolean')
  isAvailable: boolean;

  @Column('string')
  _id: ObjectID;
}
