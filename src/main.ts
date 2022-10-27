import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { databaseConfigService } from './config/config.service';

async function bootstrap() {
  const PORT = databaseConfigService.getPort() || 3001;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
