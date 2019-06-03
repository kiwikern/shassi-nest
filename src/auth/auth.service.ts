import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UserLoginDto } from './user-login.dto';
import { BcryptService } from '../common/bcrypt.service';
import { UserEntity } from '../users/entities/user.entity';
import { classToPlain } from 'class-transformer';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService,
              private readonly bcryptService: BcryptService,
              private readonly jwtService: JwtService) {
  }

  async login(login: UserLoginDto): Promise<{ jwt: string, user: {} }> {
    const user = await this.usersService.findOneByUsername(login.username);
    if (!user) {
      throw new UnauthorizedException('Unknown user');
    }

    if (!user.password) {
      throw new BadRequestException('Login only possible via Telegram button.', 'login-via-telegram-only');
    }

    if (!await this.bcryptService.checkEncryptedData(login.password, user.password)) {
      throw new UnauthorizedException('Wrong password');
    }
    return this.createToken(user);
  }

  async createToken(user: UserEntity) {
    const payload: JwtPayload = {
      userId: user._id.toString(),
      username: user.username,
      roles: user.roles || [],
    };
    return { jwt: this.jwtService.sign(payload), user: classToPlain<UserEntity>(user) };
  }

  async validateUser(payload: JwtPayload): Promise<UserEntity> {
    return this.usersService.findOneByUsername(payload.username);
  }

}
