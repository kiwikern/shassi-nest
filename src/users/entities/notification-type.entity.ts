import { Column } from 'typeorm';
import { IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationType {
  @Column({ type: 'boolean' })
  @IsBoolean()
  @ApiProperty()
  telegram: boolean = true;

  @Column({ type: 'boolean' })
  @IsBoolean()
  @ApiProperty()
  email: boolean = false;
}
