import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/repository/repository.module';
import { mailParserController } from './controller/mailParser.controller';
import { mailParserService } from './service/mailParser.service';

@Module({
  imports: [RepositoryModule],
  controllers: [mailParserController],
  providers: [mailParserService],
})
export class mailParserModule {}
