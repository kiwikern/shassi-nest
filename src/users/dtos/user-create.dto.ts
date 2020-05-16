import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  username: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ required: false })
  email?: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
