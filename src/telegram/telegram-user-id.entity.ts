import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity({ name: 'telegram-user-ids' })
export class TelegramUserIdEntity {
  @ObjectIdColumn()
    // eslint-disable-line camelcase, no-underscore-dangle, id-blacklist, id-match
  _id: ObjectID;

  @Index({unique: true})
  @Column()
  telegramId: number;

  @Index({ unique: true })
  @Column()
  userId: ObjectID;

}
