import { Test, TestingModule } from '@nestjs/testing';
import { TelegramController } from './telegram.controller';
import { TelegramTokenService } from './telegram-token.service';

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
    controller = module.get<TelegramController>(TelegramController);
  });

  it('should create a new token', async () => {
    expect(await controller.createToken({ _id: '' } as any)).toEqual({ token: 'token' });
  });

});
