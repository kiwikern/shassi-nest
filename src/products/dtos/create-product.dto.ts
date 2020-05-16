import { IsString, IsUrl, ValidateNested } from 'class-validator';
import { ProductSize } from '../entities/product-size.entity';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { typeFn } from '../../common/utils';

export class CreateProductDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsUrl()
  @ApiProperty()
  url: string;

  @ValidateNested()
  @Type(typeFn(ProductSize))
  @ApiProperty()
  size: ProductSize;
}
