import { ApiModelProperty } from '@nestjs/swagger';

export class AdminUserOverviewDto {
  @ApiModelProperty()
  userId: string;
  @ApiModelProperty()
  username: string;
  @ApiModelProperty()
  productCount: number;
  @ApiModelProperty()
  latestProductAddedDate?: Date;
  @ApiModelProperty()
  latestProductUpdatedDate?: Date;
  @ApiModelProperty()
  isConnectedToTelegram: boolean;
}
