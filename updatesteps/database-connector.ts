import { createConnection } from 'typeorm';
import { ConfigService } from '../src/config/config.service';

export class DatabaseConnector {
  connect(entityClass?) {
    const configService = new ConfigService();
    let entities;
    if (entityClass) {
      entities = entityClass;
    } else {
      entities = __dirname + '/../src/**/*.entity{.ts,.js}';
    }
    return createConnection({
      type: 'mongodb',
      host: configService.databaseHost,
      port: configService.databasePort,
      username: configService.databaseUsername,
      password: configService.databasePassword,
      database: configService.databaseName,
      entities: [entities],
      synchronize: false,
    });
  }
}
