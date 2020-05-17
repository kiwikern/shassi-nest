import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserCreateDto {
  @IsString()
  @MaxLength(50)
  username: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @MinLength(6)
  password: string;
}
