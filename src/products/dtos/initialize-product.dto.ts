import { IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { canonicalizeUrl } from '../../common/utils';

export class InitializeProductDto {
  @IsUrl()
  @Transform(canonicalizeUrl)
  @ApiProperty()
  url: string;
}
