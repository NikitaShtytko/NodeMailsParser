import { Controller, Get } from '@nestjs/common';
import { ImapService } from '../service/imap.service';

@Controller('imap')
export class ImapController {
  constructor(private readonly imapService: ImapService) {}

  @Get('/emails')
  getAllEmail() {
    return this.imapService.getAllEmail();
  }
}
