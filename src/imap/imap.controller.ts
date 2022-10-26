import { ImapService } from './imap.service';
import { Controller, Get } from '@nestjs/common';

@Controller('imap')
export class ImapController {
  constructor(private readonly imapService: ImapService) {}

  @Get('/emails')
  getAllEmail() {
    return this.imapService.getAllEmail();
  }
}
