import { Column } from 'typeorm';
import { IsBoolean } from 'class-validator';

export class NotificationType {
  @Column({ type: 'boolean' })
  @IsBoolean()
  telegram = true;

  @Column({ type: 'boolean' })
  @IsBoolean()
  email = false;
}
