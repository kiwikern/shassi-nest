import { IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { NotificationType } from '../entities/notification-type.entity';
import { Type } from 'class-transformer';

import { typeFn } from '../../common/utils';

export class UserUpdateDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  telegramId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(typeFn(NotificationType))
  notificationTypes?: NotificationType;
}
