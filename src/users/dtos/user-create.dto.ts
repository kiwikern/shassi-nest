import { IsEmail, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @IsString()
  @ApiModelProperty()
  username: string;

  @IsEmail()
  @ApiModelProperty()
  email: string;

  @IsString()
  @ApiModelProperty()
  password: string;
}
