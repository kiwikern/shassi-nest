import { ConfigService } from './config.service';
import { NoOpLogger } from '../../test/mocks/no-op-logger';
import * as fs from 'fs';
import { Logger } from '@nestjs/common';

jest.mock('fs');

describe('ConfigService', () => {
  beforeAll(async () => {
    Logger.overrideLogger(new NoOpLogger());
  });

  it('should be defined', () => {
    (fs.readFileSync as any).mockReturnValueOnce(`
        DATABASE_NAME=dbname
        DATABASE_USERNAME=dbuser
        DATABASE_PASSWORD=dbpw
        DATABASE_HOST=dbhost
        DATABASE_PORT=123456
        JWT_SECRET=jwtsecret
        MAIL_SERVER=mailserver
        MAIL_USERNAME=mailuser
        MAIL_PASSWORD=mailpassword
        TELEGRAM_TOKEN=telegramToken
        FRONTEND_DOMAIN=frontendDomain
    `);

    const service = new ConfigService();

    expect(fs.readFileSync).toHaveBeenCalledWith(`${process.env.NODE_ENV}.env`);
    expect(service.jwtSecret).toEqual('jwtsecret');
    expect(service.jwtExpiresIn).toEqual(30 * 24 * 60 * 60);
    expect(service.databaseName).toEqual('dbname');
    expect(service.databasePassword).toEqual('dbpw');
    expect(service.databaseUsername).toEqual('dbuser');
    expect(service.databasePort).toEqual(123456);
    expect(service.databaseHost).toEqual('dbhost');
    expect(service.frontendDomain).toEqual('frontendDomain');
    expect(service.mailPassword).toEqual('mailpassword');
    expect(service.mailServer).toEqual('mailserver');
    expect(service.mailUsername).toEqual('mailuser');
    expect(service.port).toEqual(3000);
    expect(service.telegramToken).toEqual('telegramToken');
    expect(service.isProduction).toEqual(false);
    expect(service.keepConnectionAlive).toEqual(false);
  });

  it('should parse mongodb variables for heroku', async () => {
    (fs.readFileSync as any).mockReturnValueOnce(`
        DATABASE_NAME=dbname
        DATABASE_USERNAME=dbuser
        DATABASE_PASSWORD=dbpw
        DATABASE_HOST=dbhost
        DATABASE_PORT=123456
        JWT_SECRET=jwtsecret
        JWT_EXPIRES_IN=1000
        MAIL_SERVER=mailserver
        MAIL_USERNAME=mailuser
        MAIL_PASSWORD=mailpassword
        TELEGRAM_TOKEN=telegramToken
        FRONTEND_DOMAIN=frontendDomain
    `);

    const dbName = 'heroku_688asJszasbahs';
    const port = 1234;
    const password = 'jsdjjb7232bjhas7a78';
    const host = 'fd568656.mydb.kiwi';
    process.env.MONGODB_URI = `mongodb://${dbName}:${password}@${host}:${port}/${dbName}`;
    try {
      const configService = new ConfigService();
      expect(configService.databaseHost).toBe(host);
      expect(configService.databasePort).toBe(port);
      expect(configService.databasePassword).toBe(password);
      expect(configService.databaseName).toBe(dbName);
      expect(configService.databaseUsername).toBe(dbName);
    } finally {
      delete process.env.MONGODB_URI;
    }
  });

  it('should throw an error on an invalid .env file', async () => {
    (fs.readFileSync as any).mockReturnValueOnce(`
      ALLMISSING=null
    `);
    expect(() => new ConfigService()).toThrow('Config validation error');

  });

  it('should fallback to environment variables without .env file', async () => {
    (fs.readFileSync as any).mockImplementationOnce(() => {
      throw new Error();
    });

    process.env.DATABASE_NAME = 'envVariableDatabaseName';
    try {
      const configService = new ConfigService();
      expect(configService.databaseName).toBe('envVariableDatabaseName');
    } finally {
      delete process.env.DATABASE_NAME;
    }
  });

});
