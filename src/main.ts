import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QueryFailedFilter } from './filters/query-failed.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalFilters(new QueryFailedFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
