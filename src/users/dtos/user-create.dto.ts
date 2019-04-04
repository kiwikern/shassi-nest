import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @IsString()
  @MaxLength(50)
  @ApiModelProperty()
  username: string;

  @IsEmail()
  @IsOptional()
  @ApiModelProperty({ required: false })
  email?: string;

  @IsString()
  @MinLength(6)
  @ApiModelProperty()
  password: string;
}
