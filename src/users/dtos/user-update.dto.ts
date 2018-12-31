import { IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { NotificationType } from '../entities/notification-type.entity';
import { Type } from 'class-transformer';

export class UserUpdateDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  telegramId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => NotificationType)
  notificationTypes?: NotificationType;
}
