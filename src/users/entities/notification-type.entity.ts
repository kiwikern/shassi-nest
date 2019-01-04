import { Column } from 'typeorm';
import { IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class NotificationType {
  @Column({ type: 'boolean' })
  @IsBoolean()
  @ApiModelProperty()
  telegram: boolean;

  @Column({ type: 'boolean' })
  @IsBoolean()
  @ApiModelProperty()
  email: boolean;
}
