import { ApiProperty } from '@nestjs/swagger';

export class ProductSizeAvailability {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  isAvailable: boolean;
}
