import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InboxEmail } from 'src/imap/entities/email.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImapRepository {
  constructor(
    @InjectRepository(InboxEmail)
    private readonly inboxEmailRepository: Repository<InboxEmail>,
  ) {}

  public async getAll(): Promise<InboxEmail[]> {
    return this.inboxEmailRepository.find();
  }
}
