import { IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { canonicalizeUrl } from '../../common/utils';

export class InitializeProductDto {
  @IsUrl()
  @Transform(canonicalizeUrl)
  @ApiModelProperty()
  url: string;
}
