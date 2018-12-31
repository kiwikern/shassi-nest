import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('/login')
  async login(@Body() userLogin: UserLoginDto): Promise<{ token: string }> {
    return { token: await this.authService.login(userLogin) };
  }

}
