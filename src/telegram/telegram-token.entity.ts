import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ObjectIdColumn,
} from 'typeorm';
import { ObjectID } from 'mongodb';

@Entity({ name: 'telegram-auth-tokens' })
export class TelegramTokenEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  token: string;

  @Index({ unique: true })
  @Column()
  userId: ObjectID;

  @CreateDateColumn()
  createdAt: Date;
}
