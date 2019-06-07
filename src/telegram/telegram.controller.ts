import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { User } from '../auth/user.decorator';
import { UserEntity } from '../users/entities/user.entity';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';
import { TelegramLoginData } from './telegram-login-data.dto';
import { TelegramLoginService } from './telegram-login.service';

@Controller('telegram')
@UseInterceptors(ClassSerializerInterceptor)
@ApiUseTags('telegram')
export class TelegramController {

  constructor(private telegramTokenService: TelegramTokenService,
              private telegramUserIdService: TelegramUserIdService,
              private telegramLoginService: TelegramLoginService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'User must be logged in.' })
  @ApiOperation({ title: 'Connection status', description: 'Returns whether the logged in user is connected to a telegram account.' })
  @ApiOkResponse({
    description: 'Returns whether user is connected to telegram bot.',
    type: { isConnectedToTelegram: Boolean },
  })
  @Get()
  async getConnectionStatus(@User() user: UserEntity): Promise<{ isConnectedToTelegram: boolean }> {
    const telegramId = await this.telegramUserIdService.findTelegramId(user._id);
    return { isConnectedToTelegram: !!telegramId };
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'User must be logged in.' })
  @ApiOperation({
    title: 'Create temporary token',
    description: `Creates a temporary token (expires after ${TelegramTokenService.expireAfterSeconds / 60}`
      + ` minutes) with which a telegram account can be linked to the logged in user.`,
  })
  @ApiCreatedResponse({
    description: 'Returns the temporary telegram token.',
    type: { token: String },
  })
  @Post()
  async createToken(@User() user: UserEntity) {
    return { token: await this.telegramTokenService.createToken(user._id) };
  }

  @ApiOperation({
    title: 'Login/Register via Telegram',
    description: 'You can use Telegram seamless login to login into an existing account ' +
      'that is linked to Telegram or to automatically create a new account.',
  })
  @ApiCreatedResponse({
    description: 'Returns the jwt token for the logged in user.',
    type: { jwt: String, user: UserEntity },
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
