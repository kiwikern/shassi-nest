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

  public static readonly expireAfterSeconds = 5 * 60;

  onModuleInit() {
    // Telegram auth tokens should only be valid for 5 minutes.
    this.entityManager.createCollectionIndex(TelegramTokenEntity,
      'createdAt', { expireAfterSeconds: TelegramTokenService.expireAfterSeconds });
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

  async checkToken(userId: ObjectID, token: string): Promise<boolean> {
    if (!userId || !token) {
      return false;
    }
    const dbToken = await this.tokenRepository.findOne({ userId });
    return dbToken && dbToken.token === token;
  }

}
