import { IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { NotificationType } from '../entities/notification-type.entity';
import { Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

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
  @Type(() => NotificationType)
  @ApiModelProperty()
  notificationTypes?: NotificationType;
}
