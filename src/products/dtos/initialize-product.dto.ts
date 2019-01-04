import { IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

export class InitializeProductDto {
  @IsUrl()
  @Transform((url: string) => url.startsWith('www.') ? 'http://' + url : url)
  @ApiModelProperty()
  url: string;
}
