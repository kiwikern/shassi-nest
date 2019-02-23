import { Test, TestingModule } from '@nestjs/testing';
import { TelegramController } from './telegram.controller';
import { TelegramTokenService } from './telegram-token.service';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('Telegram Controller', () => {
  let module: TestingModule;
  let controller: TelegramController;
  const tokenServiceMock = { createToken: () => 'token' };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TelegramController],
      providers: [
        { provide: TelegramTokenService, useValue: tokenServiceMock },
      ],
    }).compile();
    module.useLogger(new NoOpLogger());
    controller = module.get<TelegramController>(TelegramController);
  });

  it('should create a new token', async () => {
    expect(await controller.createToken({ _id: '' } as any)).toEqual({ token: 'token' });
  });

});
