import { IsEmail, IsString, Max, Min } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @IsString()
  @Max(50)
  @ApiModelProperty()
  username: string;

  @IsEmail()
  @ApiModelProperty()
  email: string;

  @IsString()
  @Min(6)
  @ApiModelProperty()
  password: string;
}
