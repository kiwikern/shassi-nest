import { IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { NotificationType } from '../entities/notification-type.entity';
import { Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { typeFn } from '../../common/utils';

export class UserUpdateDto {
  @IsOptional()
  @IsEmail()
  @ApiModelProperty()
  email?: string;

  @IsOptional()
  @IsString()
  @ApiModelProperty()
  telegramId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(typeFn(NotificationType))
  @ApiModelProperty()
  notificationTypes?: NotificationType;
}
