import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('G-11 Pes League API')
    .setDescription('The work time system API description')
    .setVersion('1.0')
    .addTag('players')
    .addTag('seasons')
    .addTag('tournaments')
    .addTag('season-players')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  const configService = app.get(ConfigService);
  const port = configService.get('app_port') || 3001;
  await app.listen(port, () => {
    console.log(`App running in port ${port}`);
  });
}
bootstrap();
