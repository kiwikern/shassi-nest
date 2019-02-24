import { IsString, IsUrl, ValidateNested } from 'class-validator';
import { ProductSize } from '../entities/product-size.entity';
import { Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { typeFn } from '../../common/utils';

export class CreateProductDto {
  @IsString()
  @ApiModelProperty()
  name: string;

  @IsUrl()
  @ApiModelProperty()
  url: string;

  @ValidateNested()
  @Type(typeFn(ProductSize))
  @ApiModelProperty()
  size: ProductSize;
}
