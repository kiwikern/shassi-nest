import { IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';

import { canonicalizeUrl } from '../../common/utils';

export class InitializeProductDto {
  @IsUrl()
  @Transform(canonicalizeUrl)
  url: string;
}
