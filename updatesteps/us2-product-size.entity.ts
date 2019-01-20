import { Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

export class UsProductSize {
  @Column('text')
  @ApiModelProperty()
  id: string;

  @Column('text')
  @ApiModelProperty()
  name: string;
}