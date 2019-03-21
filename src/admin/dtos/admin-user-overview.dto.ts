export interface AdminUserOverviewDto {
  userId: string;
  username: string;
  productCount: number;
  latestProductAddedDate?: Date;
  latestProductUpdatedDate?: Date;
}
