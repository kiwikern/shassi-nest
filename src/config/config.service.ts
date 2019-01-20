import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;
  public readonly isProduction: boolean;

  constructor() {
    const config = dotenv.parse(fs.readFileSync(`${process.env.NODE_ENV}.env`));
    this.isProduction = process.env.NODE_ENV === 'production';
    this.envConfig = this.validateInput(config);
  }

  get databaseHost(): string {
    return this.envConfig.DATABASE_HOST;
  }

  get databaseName(): string {
    return this.envConfig.DATABASE_NAME;
  }

  get databaseUsername(): string {
    return this.envConfig.DATABASE_USERNAME;
  }

  get databasePassword(): string {
    return this.envConfig.DATABASE_PASSWORD;
  }

  get databasePort(): number {
    return Number(this.envConfig.DATABASE_PORT);
  }

  get jwtSecret(): string {
    return this.envConfig.JWT_SECRET;
  }

  get jwtExpiresIn(): number {
    return Number(this.envConfig.JWT_EXPIRES_IN);
  }

  get mailServer(): string {
    return this.envConfig.MAIL_SERVER;
  }

  get mailUsername(): string {
    return this.envConfig.MAIL_USERNAME;
  }

  get mailPassword(): string {
    return this.envConfig.MAIL_PASSWORD;
  }

  get telegramToken(): string {
    return this.envConfig.TELEGRAM_TOKEN;
  }

  get frontendDomain(): string {
    return this.envConfig.FRONTEND_DOMAIN;
  }

  get port(): string {
    return this.envConfig.PORT;
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
