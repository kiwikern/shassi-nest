import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity({ name: 'telegram-user-ids' })
export class TelegramUserIdEntity {
  @ObjectIdColumn()
    // tslint:disable-next-line:variable-name
  _id: ObjectID;

  @Index({unique: true})
  @Column()
  telegramId: number;

  @Index({ unique: true })
  @Column()
  userId: ObjectID;

}
