import { Module } from '@nestjs/common';
import { ImapController } from './imap.controller';
import { ImapService } from './imap.service';

@Module({
  controllers: [ImapController],
  providers: [ImapService],
})
export class ImapModule {}
