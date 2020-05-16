import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class ProductSize {
  @Column('text')
  @ApiProperty()
  id: string;

  @Column('text')
  @ApiProperty()
  name: string;
}
