import { Injectable, Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig = {};
  public readonly isProduction: boolean;
  private readonly logger: Logger = new Logger(ConfigService.name);

  constructor() {
    this.isProduction = process.env.NODE_ENV === 'production';
    try {
      const config = dotenv.parse(fs.readFileSync(`${process.env.NODE_ENV}.env`));
      this.envConfig = this.validateInput(config);
    } catch (e) {
      this.logger.warn('No .env file was found. Falling back to process.env');
    }
    if (process.env.MONGODB_URI) {
      const matches = /mongodb:\/\/(\w+):(\w+)@((?:\w|\.)+):(\d+)\/(\w+)/.exec(process.env.MONGODB_URI);
      this.envConfig.DATABASE_USERNAME = matches[1];
      this.envConfig.DATABASE_PASSWORD = matches[2];
      this.envConfig.DATABASE_HOST = matches[3];
      this.envConfig.DATABASE_PORT = matches[4];
      this.envConfig.DATABASE_NAME = matches[5];
    }
  }

  get databaseHost(): string {
    return process.env.DATABASE_HOST || this.envConfig.DATABASE_HOST;
  }

  get databaseName(): string {
    return process.env.DATABASE_NAME || this.envConfig.DATABASE_NAME;
  }

  get databaseUsername(): string {
    return process.env.DATABASE_USERNAME || this.envConfig.DATABASE_USERNAME;
  }

  get databasePassword(): string {
    return process.env.DATABASE_PASSWORD || this.envConfig.DATABASE_PASSWORD;
  }

  get databasePort(): number {
    return Number(process.env.DATABASE_PORT) || Number(this.envConfig.DATABASE_PORT);
  }

  get jwtSecret(): string {
    return process.env.JWT_SECRET || this.envConfig.JWT_SECRET;
  }

  get jwtExpiresIn(): number {
    return Number(process.env.JWT_EXPIRES_IN) || Number(this.envConfig.JWT_EXPIRES_IN) || 30 * 24 * 60 * 60;
  }

  get mailServer(): string {
    return process.env.MAIL_SERVER || this.envConfig.MAIL_SERVER;
  }

  get mailUsername(): string {
    return process.env.MAIL_USERNAME || this.envConfig.MAIL_USERNAME;
  }

  get mailPassword(): string {
    return process.env.MAIL_PASSWORD || this.envConfig.MAIL_PASSWORD;
  }

  get telegramToken(): string {
    return process.env.TELEGRAM_TOKEN || this.envConfig.TELEGRAM_TOKEN;
  }

  get frontendDomain(): string {
    return process.env.FRONTEND_DOMAIN || this.envConfig.FRONTEND_DOMAIN;
  }

  get port(): string {
    return process.env.PORT || this.envConfig.PORT;
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      DATABASE_NAME: Joi.string().required(),
      DATABASE_HOST: Joi.string().default('localhost'),
      DATABASE_USERNAME: Joi.string().required(),
      DATABASE_PASSWORD: Joi.string().required(),
      DATABASE_PORT: Joi.number().default(27017),
      JWT_SECRET: Joi.string().required(),
      JWT_EXPIRES_IN: Joi.number().default(30 * 24 * 60 * 60),
      MAIL_SERVER: Joi.string().required(),
      MAIL_USERNAME: Joi.string().required(),
      MAIL_PASSWORD: Joi.string().required(),
      TELEGRAM_TOKEN: Joi.string().required(),
      FRONTEND_DOMAIN: Joi.string().required(),
      PORT: Joi.number().default(3000),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

}
