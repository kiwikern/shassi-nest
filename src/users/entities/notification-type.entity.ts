import { Column } from 'typeorm';
import { IsBoolean } from 'class-validator';

export class NotificationType {
  @Column({ type: 'boolean' })
  @IsBoolean()
  telegram: boolean;

  @Column({ type: 'boolean' })
  @IsBoolean()
  email: boolean;
}
