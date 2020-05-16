import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
  ApiTags, ApiProperty,
} from '@nestjs/swagger';
import { User } from '../auth/user.decorator';
import { UserEntity } from '../users/entities/user.entity';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';
import { TelegramLoginData } from './telegram-login-data.dto';
import { TelegramLoginService } from './telegram-login.service';
// eslint-disable max-classes-per-file

class TelegramConnectionStatusResponse {
  @ApiProperty()
  isConnectedToTelegram: boolean;
}

class TemporaryTokenResponse {
  @ApiProperty()
  token: string;
}

class LoginResponse {
  @ApiProperty()
  jwt: string;

  @ApiProperty()
  user: UserEntity;
}

@Controller('telegram')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('telegram')
export class TelegramController {

  constructor(private telegramTokenService: TelegramTokenService,
              private telegramUserIdService: TelegramUserIdService,
              private telegramLoginService: TelegramLoginService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'User must be logged in.' })
  @ApiOperation({ summary: 'Connection status', description: 'Returns whether the logged in user is connected to a telegram account.' })
  @ApiOkResponse({
    description: 'Returns whether user is connected to telegram bot.',
    type: TelegramConnectionStatusResponse,
  })
  @Get()
  async getConnectionStatus(@User() user: UserEntity): Promise<TelegramConnectionStatusResponse> {
    const telegramId = await this.telegramUserIdService.findTelegramId(user._id);
    return { isConnectedToTelegram: !!telegramId };
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'User must be logged in.' })
  @ApiOperation({
    summary: 'Create temporary token',
    description: `Creates a temporary token (expires after ${TelegramTokenService.expireAfterSeconds / 60}`
      + ' minutes) with which a telegram account can be linked to the logged in user.',
  })
  @ApiCreatedResponse({
    description: 'Returns the temporary telegram token.',
    type: TemporaryTokenResponse,
  })
  @Post()
  async createToken(@User() user: UserEntity) {
    return { token: await this.telegramTokenService.createToken(user._id) };
  }

  @ApiOperation({
    summary: 'Login/Register via Telegram',
    description: 'You can use Telegram seamless login to login into an existing account ' +
      'that is linked to Telegram or to automatically create a new account.',
  })
  @ApiCreatedResponse({
    description: 'Returns the jwt token for the logged in user.',
    type: LoginResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'You cannot login when the given hash is invalid or the authentication ' +
      'data is older than 10 minutes',
  })
  @Post('login')
  async login(@Body() telegramLoginData: TelegramLoginData) {
    return this.telegramLoginService.login(telegramLoginData);
  }

}
