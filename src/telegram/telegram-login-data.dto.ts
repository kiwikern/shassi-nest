/* tslint:disable:variable-name */
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class TelegramLoginData {
  @IsNumber()
  id: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  username: string;

  @IsUrl()
  photo_url: string;

  @IsNumber()
  auth_date: number;

  @IsString()
  hash: string;
}
