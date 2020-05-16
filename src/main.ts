import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from './config/config.service';
import { version } from '../package.json';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const options = new DocumentBuilder()
    .setTitle('Shassi APIs')
    .setDescription('API docs for the shopping assistant')
    .setVersion(version)
    .addTag('users')
    .addTag('products')
    .setContact('Kim Kern', 'https://kimkern.de', 'shassi@kimkern.de')
    .addBearerAuth()
    .addServer(configService.isProduction ? 'https://' : 'http://')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(configService.port);

  if (module && module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
