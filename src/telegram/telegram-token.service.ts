import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { MongoEntityManager, Repository } from 'typeorm';
import { TelegramTokenEntity } from './telegram-token.entity';
import { ObjectID } from 'mongodb';

@Injectable()
export class TelegramTokenService implements OnModuleInit {
  constructor(@InjectEntityManager() private entityManager: MongoEntityManager,
              @InjectRepository(TelegramTokenEntity) private tokenRepository: Repository<TelegramTokenEntity>) {
  }

  onModuleInit() {
    // Telegram auth tokens should only be valid for 5 minutes.
    this.entityManager.createCollectionIndex(TelegramTokenEntity,
      'createdAt', { expireAfterSeconds: 5 * 60 });
  }

  async createToken(userId: ObjectID): Promise<string> {
    const dbToken = await this.tokenRepository.findOne({ userId });
    let token;
    if (dbToken) {
      token = dbToken.token;
      await this.tokenRepository.delete({ _id: dbToken._id });
    } else {
      token = Math.random().toString(36).substring(2);
    }
    const newToken = this.tokenRepository.create({ userId, token });
    await this.tokenRepository.save(newToken);
    return `${userId.toString()}---${token}`;
  }

  async checkToken(userIdString: string, token: string): Promise<boolean> {
    if (!userIdString || !token) {
      return false;
    }
    const userId = new ObjectID(userIdString);
    const dbToken = await this.tokenRepository.findOne({ userId });
    return dbToken && dbToken.token === token;
  }

}
