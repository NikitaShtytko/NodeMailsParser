import { Controller, Get } from '@nestjs/common';
import { mailParserService } from '../service/mailParser.service';

@Controller('get')
export class mailParserController {
  constructor(private readonly imapService: mailParserService) {}

  @Get('/inboxEmails')
  readAllEmailsAndSave() {
    return this.imapService.readAllEmailsAndSave();
  }
}
