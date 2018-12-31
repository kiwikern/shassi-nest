import { IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';

export class InitializeProductDto {
  @IsUrl()
  @Transform((url: string) => url.startsWith('www.') ? 'http://' + url : url)
  url: string;
}
