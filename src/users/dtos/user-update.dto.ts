import { IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { NotificationType } from '../entities/notification-type.entity';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { typeFn } from '../../common/utils';

export class UserUpdateDto {
  @IsOptional()
  @IsEmail()
  @ApiProperty()
  email?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  telegramId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(typeFn(NotificationType))
  @ApiProperty()
  notificationTypes?: NotificationType;
}
