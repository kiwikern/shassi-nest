import { IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class FavoriteProductDto {
  @IsBoolean()
  @ApiModelProperty()
  isFavorite: boolean;
}
