import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import { UserLoginDto } from './user-login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService,
              private readonly jwtService: JwtService) {
  }

  async login(login: UserLoginDto): Promise<string> {
    const user = await this.usersService.findOneByUsername(login.username);
    if (!user) {
      throw new UnauthorizedException('Unknown user');
    }

    if (!await this.checkPassword(login.password, user.password)) {
      throw new UnauthorizedException('Wrong password');
    }
    const payload: JwtPayload = { userId: user.id, username: user.username };
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return this.usersService.findOneByUsername(payload.username);
  }

  private async checkPassword(requestPassword: string, savedPassword: string): Promise<boolean> {
    return bcrypt.compare(requestPassword, savedPassword);
  }
}
