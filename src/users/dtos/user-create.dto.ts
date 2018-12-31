import { IsEmail, IsString } from 'class-validator';

export class UserCreateDto {
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
