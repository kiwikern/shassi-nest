import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TelegramLoginData } from './telegram-login-data.dto';
import { UserEntity } from '../users/entities/user.entity';
import { TelegramUserIdService } from './telegram-user-id.service';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { ConfigService } from '../config/config.service';
import { HashService } from '../common/hash.service';

@Injectable()
export class TelegramLoginService {
  private static readonly TEN_MINUTES = 10 * 60;

  constructor(private telegramUserIdService: TelegramUserIdService,
              private authService: AuthService,
              private userService: UsersService,
              private configService: ConfigService,
              private hashService: HashService) {
  }

  async login(telegramLoginData: TelegramLoginData) {
    if (!this.isValidHash(telegramLoginData)) {
      throw new UnauthorizedException('The provided hash is not valid.');
    }
    if (!this.isRecentDate(telegramLoginData)) {
      throw new UnauthorizedException('Telegram auth data is too old. Please try again.');
    }

    const userId = await this.telegramUserIdService.findUserId(telegramLoginData.id);
    let user: UserEntity;
    if (!userId) {
      // TODO: get non-existent username
      const newUser = { username: telegramLoginData.username, password: null };
      user = await this.userService.createUser(newUser);
      await this.telegramUserIdService.saveTelegramId(user._id, telegramLoginData.id);
    } else {
      user = await this.userService.findOneById(userId);
    }
    return this.authService.createToken(user);
  }

  private isValidHash(telegramLoginData: TelegramLoginData): boolean {
    const hash = this.hashService.createHash(this.getDataCheckString(telegramLoginData), this.configService.telegramToken);
    return hash === telegramLoginData.hash;
  }

  private isRecentDate(telegramLoginData: TelegramLoginData): boolean {
    const now = new Date().getTime() / 1000;
    return now - telegramLoginData.auth_date < TelegramLoginService.TEN_MINUTES;
  }

  private getDataCheckString(telegramLoginData: TelegramLoginData): string {
    return Object.keys(telegramLoginData)
      .sort()
      .filter(key => key !== 'hash')
      .map(key => `${key}=${telegramLoginData[key]}`)
      .join('\n');
  }

}
