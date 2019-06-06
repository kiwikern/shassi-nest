/* tslint:disable:variable-name */
import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class TelegramLoginData {
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  first_name?: string;

  @IsString()
  @IsOptional()
  last_name?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsUrl()
  @IsOptional()
  photo_url?: string;

  @IsNumber()
  auth_date: number;

  @IsString()
  hash: string;
}
