export class AdminUserOverviewDto {
  userId: string;
  username: string;
  productCount: number;
  latestProductAddedDate?: Date;
  latestProductUpdatedDate?: Date;
  isConnectedToTelegram: boolean;
}
