import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CommonModule } from '../common/common.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  exports: [UsersService],
})
export class UsersModule {
}
