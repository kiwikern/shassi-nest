import { IsBoolean } from 'class-validator';

export class FavoriteProductDto {
  @IsBoolean()
  isFavorite: boolean;
}
