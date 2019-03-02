import { ClassSerializerInterceptor, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { User } from '../auth/user.decorator';
import { UserEntity } from '../users/entities/user.entity';
import { TelegramTokenService } from './telegram-token.service';
import { TelegramUserIdService } from './telegram-user-id.service';

@Controller('telegram')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(ClassSerializerInterceptor)
@ApiBearerAuth()
@ApiUseTags('telegram')
@ApiForbiddenResponse({ description: 'User must be logged in.' })
export class TelegramController {

  constructor(private telegramTokenService: TelegramTokenService,
              private telegramUserIdService: TelegramUserIdService) {
  }

  @ApiOkResponse({
    description: 'Returns whether user is connected to telegram bot.',
    type: { isConnectedToTelegram: Boolean },
  })
  @Get()
  async getConnectionStatus(@User() user: UserEntity): Promise<{ isConnectedToTelegram: boolean }> {
    const telegramId = await this.telegramUserIdService.findTelegramId(user._id);
    return { isConnectedToTelegram: !!telegramId };
  }

  @ApiCreatedResponse({
    description: 'Creates a temporary telegram token.',
    type: { token: String },
  })
  @Post()
  async createToken(@User() user: UserEntity) {
    return { token: await this.telegramTokenService.createToken(user._id) };
  }

}
