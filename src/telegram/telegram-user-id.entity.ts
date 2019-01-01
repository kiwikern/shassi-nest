import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity({ name: 'users' })
export class TelegramUserIdEntity {
  @ObjectIdColumn()
    // tslint:disable-next-line:variable-name
  _id: ObjectID;

  @Index({unique: true})
  @Column()
  telegramId: string;

  @Index({ unique: true })
  @Column('text')
  userId: ObjectID;

}
