import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Exclude, Transform } from 'class-transformer';
import { NotificationType } from './notification-type.entity';
import { ObjectID } from 'mongodb';

@Entity({ name: 'users' })
export class UserEntity {
  @ObjectIdColumn()
  @Transform((value) => value.toString(), { toPlainOnly: true })
    // tslint:disable-next-line:variable-name
  _id: ObjectID;

  @Column()
  username: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column(type => NotificationType)
  notificationTypes: NotificationType;
}
