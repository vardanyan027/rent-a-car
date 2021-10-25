import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exception/allExceptionHandler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(8888);
}

bootstrap().then((r) => console.log('Server is started'));
