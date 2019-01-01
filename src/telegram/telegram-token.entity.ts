import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity({ name: 'users' })
export class TelegramTokenEntity {
  @ObjectIdColumn()
    // tslint:disable-next-line:variable-name
  _id: ObjectID;

  @Column()
  token: string;

  @Index({ unique: true })
  @Column('text')
  userId: ObjectID;

  @Column({ default: new Date() })
  createdAt: Date;

}
