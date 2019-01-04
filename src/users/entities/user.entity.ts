import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Exclude, Transform } from 'class-transformer';
import { NotificationType } from './notification-type.entity';
import { ObjectID } from 'mongodb';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class UserEntity {
  @ObjectIdColumn()
  @Transform((value) => value.toString(), { toPlainOnly: true })
  @ApiModelProperty({type: 'string'})
    // tslint:disable-next-line:variable-name
  _id: ObjectID;

  @Column()
  @ApiModelProperty()
  username: string;

  @Column()
  @ApiModelProperty()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column(type => NotificationType)
  @ApiModelProperty()
  notificationTypes: NotificationType;
}
