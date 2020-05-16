import { Test, TestingModule } from '@nestjs/testing';
import { TelegramUserIdService } from './telegram-user-id.service';
import { TelegramUserIdEntity } from './telegram-user-id.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { BadRequestException } from '@nestjs/common';
import { repositoryMockFactory } from '../../test/mocks/jest-mocks';
import { MockType } from '../../test/mock.type';
import { Repository } from 'typeorm';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('TelegramUserIdService', () => {
  let service: TelegramUserIdService;
  let repositoryMock: MockType<Repository<TelegramUserIdEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramUserIdService,
        {
          provide: getRepositoryToken(TelegramUserIdEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    module.useLogger(new NoOpLogger());
    service = module.get<TelegramUserIdService>(TelegramUserIdService);
    repositoryMock = module.get(getRepositoryToken(TelegramUserIdEntity));
  });

  it('should create a token', async () => {
    const userId = ObjectID.createFromTime(0);
    const telegramId = 123456;
    expect(await service.saveTelegramId(userId, telegramId)).toEqual({
      userId,
      telegramId,
    });
    expect(repositoryMock.save).toHaveBeenCalledWith({ userId, telegramId });
  });

  it('should not create a token without userId', async () => {
    const userId = null;
    const telegramId = 123456;
    try {
      await service.saveTelegramId(userId, telegramId);
      fail('Should have thrown an error.');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
    }
  });

  it('should not create a token without telegramId', async () => {
    const userId = ObjectID.createFromTime(0);
    const telegramId = null;
    try {
      await service.saveTelegramId(userId, telegramId);
      fail('Should have thrown an error.');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
    }
  });

  it('should find the telegramId for a user', async () => {
    const userId = ObjectID.createFromTime(0);
    repositoryMock.findOne.mockReturnValue({ telegramId: 'id' });
    expect(await service.findTelegramId(userId)).toEqual('id');
  });

  it('should return null if no id is found for user', async () => {
    const userId = ObjectID.createFromTime(0);
    repositoryMock.findOne.mockReturnValue(null);
    expect(await service.findTelegramId(userId)).toEqual(null);
  });

  it('should find the userId for a telegramId', async () => {
    const telegramId = 123456;
    repositoryMock.findOne.mockReturnValue({ userId: 'id' });
    expect(await service.findUserId(telegramId)).toEqual('id');
  });

  it('should return null if no userId is found for the telegramId', async () => {
    const telegramId = 123456;
    repositoryMock.findOne.mockReturnValue(null);
    expect(await service.findUserId(telegramId)).toEqual(null);
  });
});
