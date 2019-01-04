import { IsString, IsUrl, ValidateNested } from 'class-validator';
import { ProductSize } from '../entities/product-size.entity';
import { Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @ApiModelProperty()
  name: string;

  @IsUrl()
  @ApiModelProperty()
  url: string;

  @ValidateNested()
  @Type(() => ProductSize)
  @ApiModelProperty()
  size: ProductSize;
}
