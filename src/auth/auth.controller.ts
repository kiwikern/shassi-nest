import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './user-login.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { UserEntity } from '../users/entities/user.entity';

// eslint-disable max-classes-per-file

class LoginResponse {
  jwt: string;
  user: UserEntity;
}

@Controller('auth')
@ApiTags('users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiOperation({
    summary: 'Login',
    description: 'Login with username and password',
  })
  @ApiCreatedResponse({
    description: 'Returns the jwt token for the logged in user.',
    type: LoginResponse,
  })
  @ApiBadRequestResponse({ description: 'Wrong username or password.' })
  async login(@Body() userLogin: UserLoginDto): Promise<LoginResponse> {
    return await this.authService.login(userLogin);
  }
}
