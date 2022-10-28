import { Injectable } from '@nestjs/common';
import { simpleParser } from 'mailparser';
import * as Imap from 'imap';
import { mailParserRepository } from 'src/repository/mailParser.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class mailParserService {
  constructor(
    private readonly emailRepository: mailParserRepository,
    private readonly configService: ConfigService,
  ) {}

  async readAllEmailsAndSave() {
    const imapConfig = {
      user: this.configService.get('GOOGLE_USER'),
      password: this.configService.get('GOOGLE_APP_PASSWORD'),
      host: 'imap.gmail.com',
      port: 993,
      tlsOptions: { rejectUnauthorized: false },
      tls: true,
    };
    const imap = new Imap(imapConfig);

    try {
      imap.once('ready', () => {
        imap.openBox('INBOX', false, () => {
          imap.search(['ALL'], (error, results) => {
            const f = imap.fetch(results, { bodies: '' });
            f.on('message', (message) => {
              message.on('body', (stream) => {
                simpleParser(stream, async (error, parsed) => {
                  const { from, subject, text } = parsed;
                  const { name, address, group } = from.value[0];

                  const inboxEmail = {
                    name,
                    subject,
                    email: address,
                    text,
                    // group,
                  };
                  console.log(inboxEmail);
                  /* Make API call to save the data
                       Save the retrieved data into a database.
                       E.t.c
                    */
                  this.emailRepository.saveEmails(inboxEmail);
                });
              });
            });
            f.once('error', (ex) => {
              return Promise.reject(ex);
            });
            f.once('end', () => {
              console.log('Done fetching all messages!');
              imap.end();
            });
          });
        });
      });

      imap.once('error', (err) => {
        console.log(err);
      });

      imap.once('end', () => {
        console.log('Connection ended');
      });

      imap.connect();
    } catch (ex) {
      console.error(ex.message);
      console.log('an error occurred');
    }
  }
}
