import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class UsProductSize {
  @Column('text')
  id: string;

  @Column('text')
  name: string;
}
