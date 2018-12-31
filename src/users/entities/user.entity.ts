import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Exclude, Transform } from 'class-transformer';
import { NotificationType } from './notification-type.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @ObjectIdColumn()
  @Transform((value) => value.toString())
  id: string;

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
