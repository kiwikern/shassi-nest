import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './user-login.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { UserEntity } from '../users/entities/user.entity';

@Controller('auth')
@ApiUseTags('users')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('/login')
  @ApiOperation({title: 'Login', description: 'Login with username and password'})
  @ApiCreatedResponse({description: 'Returns the jwt token for the logged in user.', type: { jwt: String, user: UserEntity}})
  @ApiBadRequestResponse({description: 'Wrong username or password.'})
  async login(@Body() userLogin: UserLoginDto): Promise<{ jwt: string, user: {}}> {
    return await this.authService.login(userLogin);
  }

}
