import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './user-login.dto';
import { ApiUseTags, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('auth')
@ApiUseTags('users')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('/login')
  @ApiCreatedResponse({description: 'Returns the jwt token for the logged in user.'})
  @ApiBadRequestResponse({description: 'Wrong username or password.'})
  async login(@Body() userLogin: UserLoginDto): Promise<{ token: string }> {
    return { token: await this.authService.login(userLogin) };
  }

}
