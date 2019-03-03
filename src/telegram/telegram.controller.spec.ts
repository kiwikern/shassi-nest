import { Test, TestingModule } from '@nestjs/testing';
import { TelegramController } from './telegram.controller';
import { TelegramTokenService } from './telegram-token.service';
import { NoOpLogger } from '../../test/mocks/no-op-logger';
import { TelegramUserIdService } from './telegram-user-id.service';
import { telegramUserIdServiceFactory } from '../../test/mocks/jest-mocks';
import { MockType } from '../../test/mock.type';

describe('Telegram Controller', () => {
  let module: TestingModule;
  let controller: TelegramController;
  const tokenServiceMock = { createToken: () => 'token' };
  let userIdServiceMock: MockType<TelegramUserIdService>;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [TelegramController],
      providers: [
        { provide: TelegramTokenService, useValue: tokenServiceMock },
        { provide: TelegramUserIdService, useFactory: telegramUserIdServiceFactory },
      ],
    }).compile();
    module.useLogger(new NoOpLogger());
    controller = module.get<TelegramController>(TelegramController);
    userIdServiceMock = module.get(TelegramUserIdService);
  });

  it('should return connection status', async () => {
    userIdServiceMock.findTelegramId.mockReturnValueOnce(null);
    expect(await controller.getConnectionStatus({ _id: '' } as any))
      .toEqual({ isConnectedToTelegram: false });
  });

  it('should return connection status', async () => {
    userIdServiceMock.findTelegramId.mockReturnValueOnce('89341298');
    expect(await controller.getConnectionStatus({ _id: '' } as any))
      .toEqual({ isConnectedToTelegram: true });
  });

  it('should create a new token', async () => {
    expect(await controller.createToken({ _id: '' } as any))
      .toEqual({ token: 'token' });
  });

});
