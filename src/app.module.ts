import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImapModule } from './imap/imap.module';

@Module({
  imports: [ImapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
