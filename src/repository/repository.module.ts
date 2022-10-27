import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfigService } from 'src/config/config.service';
import { ImapRepository } from './imap.repository';

@Module({
  imports: [TypeOrmModule.forFeature(databaseConfigService.getEntitiesArray())],
  providers: [ImapRepository],
  exports: [ImapRepository],
})
export class RepositoryModule {}
