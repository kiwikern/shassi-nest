/* tslint:disable:variable-name */
import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';
import { toInteger } from '../common/utils';

export class TelegramLoginData {
  @IsNumber()
  @Transform(toInteger, {toClassOnly: true})
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
  @Transform(toInteger, {toClassOnly: true})
  auth_date: number;

  @IsString()
  hash: string;
}
