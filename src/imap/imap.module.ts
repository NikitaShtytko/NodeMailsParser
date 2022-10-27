import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/repository/repository.module';
import { ImapController } from './controller/imap.controller';
import { ImapService } from './service/imap.service';

@Module({
  imports: [RepositoryModule],
  controllers: [ImapController],
  providers: [ImapService],
})
export class ImapModule {}
