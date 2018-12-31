import { Body, ClassSerializerInterceptor, Controller, Get, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './dtos/user-create.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.decorator';
import { UserEntity } from './entities/user.entity';
import { UserUpdateDto } from './dtos/user-update.dto';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  getUser(@User() user: UserEntity): Promise<UserEntity> {
    return this.usersService.findOneByUsername(user.username);
  }

  @Post('/')
  createUser(@Body() user: UserCreateDto): Promise<UserEntity> {
    return this.usersService.createUser(user);
  }

  @Put('/')
  @UseGuards(AuthGuard('jwt'))
  updateUser(@User() user: UserEntity, @Body() userUpdate: UserUpdateDto): Promise<UserEntity> {
    return this.usersService.updateUser(user._id, userUpdate);
  }

}
