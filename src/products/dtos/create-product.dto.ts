import { IsString, IsUrl, ValidateNested } from 'class-validator';
import { ProductSize } from '../entities/product-size.entity';
import { Type } from 'class-transformer';
import { typeFn } from '../../common/utils';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsUrl()
  url: string;

  @ValidateNested()
  @Type(typeFn(ProductSize))
  size: ProductSize;
}
