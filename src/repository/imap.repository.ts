import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InboxEmail } from 'src/mailParser/entities/email.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImapRepository {
  constructor(
    @InjectRepository(InboxEmail)
    private readonly inboxEmailRepository: Repository<InboxEmail>,
  ) {}

  public async saveEmails(inboxEmail: InboxEmail): Promise<InboxEmail> {
    return await this.inboxEmailRepository.save(inboxEmail);
  }
}
