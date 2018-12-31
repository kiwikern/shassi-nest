import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { NotificationType } from './notification-type.entity';
import { ObjectID } from 'mongodb';

@Entity({ name: 'users' })
export class UserEntity {
  @ObjectIdColumn()
  // @Transform((value) => value.toString())
  _id: ObjectID;

  @Column()
  username: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({nullable: true})
  telegramId?: string;

  @Column(type => NotificationType)
  notificationTypes: NotificationType;
}
