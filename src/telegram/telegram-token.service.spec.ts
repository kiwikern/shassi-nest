import { Test, TestingModule } from '@nestjs/testing';
import { TelegramTokenService } from './telegram-token.service';
import { ObjectID } from 'mongodb';
import { TelegramTokenEntity } from './telegram-token.entity';
import { getRepositoryToken, getEntityManagerToken } from '@nestjs/typeorm';

describe('TelegramTokenService', () => {
  let service: TelegramTokenService;
  let repositoryMock;
  let entityManagerMock;

  beforeEach(async () => {
    repositoryMock = new (jest.fn(() => ({
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(() => ({})),
      save: jest.fn(entity => entity),
      delete: jest.fn(() => Promise.resolve()),
    })))();
    entityManagerMock = new (jest.fn(() => ({
      createCollectionIndex: jest.fn(),
    })))();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TelegramTokenService,
        { provide: getEntityManagerToken(), useValue: entityManagerMock },
        { provide: getRepositoryToken(TelegramTokenEntity), useValue: repositoryMock },
      ],
    }).compile();
    service = module.get<TelegramTokenService>(TelegramTokenService);
  });

  it('should create the index', () => {
    service.onModuleInit();
    expect(entityManagerMock.createCollectionIndex).toHaveBeenCalled();
  });

  it('should create a new token.', async () => {
    const userId = ObjectID.createFromTime(0);
    repositoryMock.findOne.mockReturnValue(null);
    const token = await service.createToken(userId);
    const tokenParts = token.split('---');
    expect(tokenParts[0]).toEqual(userId.toString());
    expect(typeof tokenParts[1]).toBe('string');
    expect(repositoryMock.save).toHaveBeenCalled();
  });

  it('should delete an existing token and create a new one', async () => {
    const userId = ObjectID.createFromTime(0);
    repositoryMock.findOne.mockReturnValue({ token: 'my-token' });
    const token = await service.createToken(userId);
    const tokenParts = token.split('---');
    expect(tokenParts[0]).toEqual(userId.toString());
    expect(tokenParts[1]).toBe('my-token');
    expect(repositoryMock.delete).toHaveBeenCalled();
    expect(repositoryMock.save).toHaveBeenCalled();
  });

  it('should accept the correct token for a user', async () => {
    const userId = ObjectID.createFromTime(0);
    const token = 'my-token';
    repositoryMock.findOne.mockReturnValue({token});
    expect(await service.checkToken(userId, token)).toBe(true);
  });

  it('should reject a wrong token for a user', async () => {
    const userId = ObjectID.createFromTime(0);
    const token = 'my-token';
    repositoryMock.findOne.mockReturnValue({token: 'other'});
    expect(await service.checkToken(userId, token)).toBe(false);
  });

  it('should reject without a token', async () => {
    const userId = ObjectID.createFromTime(0);
    const token = null;
    expect(await service.checkToken(userId, token)).toBe(false);
  });

  it('should reject without a user', async () => {
    const userId = null;
    const token = 'my-token';
    repositoryMock.findOne.mockReturnValue({token});
    expect(await service.checkToken(userId, token)).toBe(false);
  });
});
