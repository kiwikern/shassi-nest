import { Injectable } from '@nestjs/common';
import { TelegramUserIdEntity } from './telegram-user-id.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';

@Injectable()
export class TelegramUserIdService {
  constructor(@InjectRepository(TelegramUserIdEntity) private telegramUserIdRepository: Repository<TelegramUserIdEntity>) {
  }

  async saveTelegramId(userId: ObjectID, telegramId: string): Promise<TelegramUserIdEntity> {
    const newTelegramId = this.telegramUserIdRepository.create();
    Object.assign(newTelegramId, { userId, telegramId });
    return await this.telegramUserIdRepository.save(newTelegramId);
  }

  async findTelegramId(userId: ObjectID): Promise<string> {
    const telegramId = await this.telegramUserIdRepository.findOne({userId});
    return telegramId ? telegramId.telegramId : null;
  }

  async findUserId(telegramId: string): Promise<ObjectID> {
    const entity = await this.telegramUserIdRepository.findOne({telegramId});
    return entity ? entity.userId : null;
  }

}
