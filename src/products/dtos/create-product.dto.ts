import { IsString, IsUrl, ValidateNested } from 'class-validator';
import { ProductSize } from '../entities/product-size.entity';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsUrl()
  url: string;

  @ValidateNested()
  @Type(() => ProductSize)
  size: ProductSize;
}
