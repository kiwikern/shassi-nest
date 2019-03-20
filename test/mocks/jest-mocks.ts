import { MockType } from '../mock.type';
import { ProductsService } from '../../src/products/products.service';
import { TelegramService } from '../../src/telegram/telegram.service';
import { CronJobService } from '../../src/common/cron-job.service';
import { TelegramUserIdService } from '../../src/telegram/telegram-user-id.service';
import { TelegramTokenService } from '../../src/telegram/telegram-token.service';
import Telegraf from 'telegraf';
import { MongoEntityManager, Repository } from 'typeorm';
import { BcryptService } from '../../src/common/bcrypt.service';
import { UsersService } from '../../src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CrawlerService } from '../../src/crawler/crawler.service';
import { AuthService } from '../../src/auth/auth.service';
import { Reflector } from '@nestjs/core';
import { ExecutionContext } from '@nestjs/common';

export const productsServiceFactory: () => MockType<ProductsService> = jest.fn(() => ({
  updateAllProducts: jest.fn(),
  getProducts: jest.fn(),
  initializeProduct: jest.fn(),
  addProduct: jest.fn(),
  deleteProduct: jest.fn(),
  updateSingleProduct: jest.fn(),
  markRead: jest.fn(),
}));

export const telegramServiceFactory: () => MockType<TelegramService> = jest.fn(() => ({
  notifyAboutUpdate: jest.fn(),
  onModuleInit: jest.fn(),
  onModuleDestroy: jest.fn(),
  handleErrors: jest.fn(),
  addProductOnURLSent: jest.fn(),
  authSession: jest.fn(),
  startCommand: jest.fn(),
  updateProductOnSizeChosen: jest.fn(),
  cleanUpSessionData: jest.fn(),
  evenlySplitArray: jest.fn(),
  handleReceivedPhoto: jest.fn(),
  handleMessageWithoutUrl: jest.fn(),
}));

export const cronJobServiceFactory: () => MockType<CronJobService> = jest.fn(() => ({
  create: jest.fn(() => ({
    start: () => null,
    nextDates: () => new Date(),
    stop: jest.fn(),
  })),
}));

export const telegramUserIdServiceFactory: () => MockType<TelegramUserIdService> = jest.fn(() => ({
  findUserId: jest.fn(),
  findTelegramId: jest.fn(),
  saveTelegramId: jest.fn(),
}));

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(entity => entity),
  save: jest.fn(entity => entity),
  delete: jest.fn(() => Promise.resolve()),
  queryRunner: jest.fn(),
  metadata: jest.fn(),
  manager: jest.fn(),
}));

export const tokenServiceFactory: () => MockType<TelegramTokenService> = jest.fn(() => ({
  checkToken: jest.fn(),
  createToken: jest.fn(),
  onModuleInit: jest.fn(),
}));

// @ts-ignore
export const telegrafFactory: () => MockType<Telegraf<any>> = jest.fn(() => ({
  telegram: { sendMessage: jest.fn() },
  catch: jest.fn(),
  use: jest.fn(),
  on: jest.fn(),
  command: jest.fn(),
  hears: jest.fn(),
  action: jest.fn(),
  stop: jest.fn(),
  startPolling: jest.fn(),
}));

// @ts-ignore
export const entityManagerMockFactory: () => MockType<MongoEntityManager> = jest.fn(() => ({
  createCollectionIndex: jest.fn(),
}));

export const bcryptServiceFactory: () => MockType<BcryptService> = jest.fn(() => ({
  hash: jest.fn(),
  checkEncryptedData: jest.fn(),
}));

export const userServiceFactory: () => MockType<UsersService> = jest.fn(() => ({
  findOneByUsername: jest.fn(),
  createUser: jest.fn(),
  updateUser: jest.fn(),
  findOneByEmail: jest.fn(),
}));

export const jwtServiceFactory: () => MockType<JwtService> = jest.fn(() => ({
  sign: jest.fn(),
  signAsync: jest.fn(),
  verify: jest.fn(),
  verifyAsync: jest.fn(),
  decode: jest.fn(),
}));

export const crawlerServiceFactory: () => MockType<CrawlerService> = jest.fn(() => ({
  getInitData: jest.fn(),
  getUpdateData: jest.fn(),
}));

export const authServiceFactory: () => MockType<AuthService> = jest.fn(() => ({
  validateUser: jest.fn(),
  login: jest.fn(),
}));

export const reflectorFactory: () => MockType<Reflector> = jest.fn(() => ({
  get: jest.fn(),
  getAll: jest.fn(),
}));

export const executionContextFactory: () => MockType<ExecutionContext> = jest.fn(() => ({
  getClass: jest.fn(),
  getHandler: jest.fn(),
  switchToHttp: jest.fn(),
  getArgs: jest.fn(),
  getArgByIndex: jest.fn(),
  switchToRpc: jest.fn(),
  switchToWs: jest.fn(),
}));
