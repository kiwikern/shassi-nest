import { ClassSerializerInterceptor, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiForbiddenResponse, ApiUseTags, ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { User } from '../auth/user.decorator';
import { UserEntity } from '../users/entities/user.entity';
import { TelegramTokenService } from './telegram-token.service';

@Controller('telegram')
@UseGuards(AuthGuard('jwt'))
@UseInterceptors(ClassSerializerInterceptor)
@ApiBearerAuth()
@ApiUseTags('products')
@ApiForbiddenResponse({ description: 'User must be logged in.' })
export class TelegramController {

  constructor(private telegramTokenService: TelegramTokenService) {
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
