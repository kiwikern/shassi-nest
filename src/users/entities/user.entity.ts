import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';
import { Exclude, Transform } from 'class-transformer';
import { NotificationType } from './notification-type.entity';
import { ObjectID } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';
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
  // eslint-disable-line camelcase, no-underscore-dangle, id-blacklist, id-match
  _id: ObjectID;

  @Column()
  @Index({ unique: true })
  @ApiProperty()
  username: string;

  @Column()
  @ApiProperty()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column(typeFn(NotificationType))
  @ApiProperty()
  notificationTypes: NotificationType = { telegram: true, email: false };

  @Column({ type: 'enum', enum: Role })
  @ApiProperty({ enum: Role, isArray: true })
  roles?: Role[];
}
