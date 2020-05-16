import { Body, ClassSerializerInterceptor, Controller, Get, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './dtos/user-create.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.decorator';
import { UserEntity } from './entities/user.entity';
import { UserUpdateDto } from './dtos/user-update.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
  ApiBadRequestResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('users')
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logged in user', description: 'Get the logged in user' })
  @ApiOkResponse({ description: 'Returns the logged in user.', type: UserEntity })
  @ApiForbiddenResponse({ description: 'User must be logged in.' })
  getUser(@User() user: UserEntity): UserEntity {
    return user;
  }

  @Post('/')
  @ApiOperation({ summary: 'Registration', description: 'Registers a new user' })
  @ApiCreatedResponse({ description: 'Returns the newly created user.', type: UserEntity })
  @ApiBadRequestResponse({ description: 'Wrong username or password.' })
  createUser(@Body() user: UserCreateDto): Promise<UserEntity> {
    return this.usersService.createUser(user);
  }

  @Put('/')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update user', description: 'Updates the user settings.' })
  @ApiCreatedResponse({ description: 'Returns the updated user.', type: UserEntity })
  @ApiForbiddenResponse({ description: 'User must be logged in.' })
  @ApiBadRequestResponse({ description: 'Invalid request.' })
  updateUser(@User() user: UserEntity, @Body() userUpdate: UserUpdateDto): Promise<UserEntity> {
    return this.usersService.updateUser(user._id, userUpdate);
  }

}
