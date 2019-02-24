import { Column, Entity, Index, ObjectIdColumn } from 'typeorm';
import { Exclude, Transform } from 'class-transformer';
import { NotificationType } from './notification-type.entity';
import { ObjectID } from 'mongodb';
import { ApiModelProperty } from '@nestjs/swagger';
import { toObjectId, toStringSafe, typeFn } from '../../common/utils';

@Entity({ name: 'users' })
export class UserEntity {
  @ObjectIdColumn()
  @Transform(toStringSafe, { toPlainOnly: true })
  @Transform(toObjectId, { toClassOnly: true })
  @ApiModelProperty({type: 'string'})
    // tslint:disable-next-line:variable-name
  _id: ObjectID;

  @Column()
  @Index({unique: true})
  @ApiModelProperty()
  username: string;

  @Column()
  @ApiModelProperty()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column(typeFn(NotificationType))
  @ApiModelProperty()
  notificationTypes: NotificationType = {telegram: true, email: false};
}
