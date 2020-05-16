import { IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FavoriteProductDto {
  @IsBoolean()
  @ApiProperty()
  isFavorite: boolean;
}
