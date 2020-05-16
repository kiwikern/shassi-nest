import { ApiProperty } from '@nestjs/swagger';

export class AdminUserOverviewDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  productCount: number;
  @ApiProperty()
  latestProductAddedDate?: Date;
  @ApiProperty()
  latestProductUpdatedDate?: Date;
  @ApiProperty()
  isConnectedToTelegram: boolean;
}
