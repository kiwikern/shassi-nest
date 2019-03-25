import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from './config/config.service';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const options = new DocumentBuilder()
    .setTitle('Shassi APIs')
    .setDescription('API docs for the shopping assistant')
    .setVersion('1.0')
    .addTag('users')
    .addTag('products')
    .setContactEmail('shassi@kimkern.de')
    .addBearerAuth()
    .setSchemes(configService.isProduction ? 'https' : 'http')
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
