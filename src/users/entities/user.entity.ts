import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';
import { Exclude, Transform } from 'class-transformer';
import { NotificationType } from './notification-type.entity';
import { ObjectID } from 'mongodb';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { toObjectId, toStringSafe, typeFn } from '../../common/utils';

export enum Role {
  ADMIN = 'admin',
}

@Entity({ name: 'users' })
export class UserEntity {
  @ObjectIdColumn()
  @Transform(toStringSafe, { toPlainOnly: true })
  @Transform(toObjectId, { toClassOnly: true })
  @ApiProperty({ type: 'string' })
  _id: ObjectID;

  @Column()
  @Index({ unique: true })
  username: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  @ApiHideProperty()
  password: string;

  @Column(typeFn(NotificationType))
  notificationTypes: NotificationType = { telegram: true, email: false };

  @Column({ type: 'enum', enum: Role })
  roles?: Role[];
}
