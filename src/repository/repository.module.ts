import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfigService } from 'src/config/config.service';
import { mailParserRepository } from './mailParser.repository';

@Module({
  imports: [TypeOrmModule.forFeature(databaseConfigService.getEntitiesArray())],
  providers: [mailParserRepository],
  exports: [mailParserRepository],
})
export class RepositoryModule {}
