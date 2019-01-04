import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserLoginDto {
  @IsString()
  @ApiModelProperty()
  username: string;

  @IsString()
  @ApiModelProperty()
  password: string;
}
