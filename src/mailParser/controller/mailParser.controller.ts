import { Controller, Get } from '@nestjs/common';
import { mailParserService } from '../service/mailParser.service';

@Controller('imap')
export class mailParserController {
  constructor(private readonly imapService: mailParserService) {}

  @Get('/emails')
  readAllEmailsAndSave() {
    return this.imapService.readAllEmailsAndSave();
  }
}
