import { Test, TestingModule } from '@nestjs/testing';
import { TelegramUserIdService } from './telegram-user-id.service';
import { TelegramUserIdEntity } from './telegram-user-id.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { BadRequestException } from '@nestjs/common';

describe('TelegramUserIdService', () => {
  let service: TelegramUserIdService;
  let repositoryMock;

  beforeEach(async () => {
    repositoryMock = new (jest.fn(() => ({
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(entity => entity),
      save: jest.fn(entity => entity),
      delete: jest.fn(() => Promise.resolve()),
    })))();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramUserIdService,
        { provide: getRepositoryToken(TelegramUserIdEntity), useValue: repositoryMock },
      ],
    }).compile();
    service = module.get<TelegramUserIdService>(TelegramUserIdService);
  });

  it('should create a token', async () => {
    const userId = ObjectID.createFromTime(0);
    const telegramId = 'telegramId';
    expect(await service.saveTelegramId(userId, telegramId)).toEqual({userId, telegramId});
    expect(repositoryMock.save).toHaveBeenCalledWith({userId, telegramId});
  });

  it('should not create a token without userId', async () => {
    const userId = null;
    const telegramId = 'telegramId';
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
    repositoryMock.findOne.mockReturnValue({telegramId: 'id'});
    expect(await service.findTelegramId(userId)).toEqual('id');
  });

  it('should return null if no id is found for user', async () => {
    const userId = ObjectID.createFromTime(0);
    repositoryMock.findOne.mockReturnValue(null);
    expect(await service.findTelegramId(userId)).toEqual(null);
  });

  it('should find the userId for a telegramId', async () => {
    const telegramId = 'telegramId';
    repositoryMock.findOne.mockReturnValue({userId: 'id'});
    expect(await service.findUserId(telegramId)).toEqual('id');
  });

  it('should return null if no userId is found for the telegramId', async () => {
    const telegramId = 'telegramId';
    repositoryMock.findOne.mockReturnValue(null);
    expect(await service.findUserId(telegramId)).toEqual(null);
  });

});
