import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import * as Imap from 'imap';
import { simpleParser } from 'mailparser';

@Injectable()
export class ImapService {
  constructor(private readonly configService: ConfigService) {}

  getAllEmail() {
    const imapConfig = {
      user: this.configService.get('GOOGLE_USER'),
      password: this.configService.get('GOOGLE_APP_PASSWORD'),
      host: 'imap.gmail.com',
      port: 993,
      tlsOptions: { rejectUnauthorized: false },
      tls: true,
    };
    const imap = new Imap(imapConfig);
    const result = [];

    try {
      console.log('1');
      imap.once('ready', () => {
        imap.openBox('INBOX', false, () => {
          imap.search(['ALL'], (error, results) => {
            const f = imap.fetch(results, { bodies: '' });
            f.on('message', (message) => {
              message.on('body', (stream) => {
                simpleParser(stream, async (error, parsed) => {
                  const { from, subject, textAsHtml, text } = parsed;
                  console.log(parsed);
                  result.push({ parsed });
                  /* Make API call to save the data
                       Save the retrieved data into a database.
                       E.t.c
                    */
                });
              });
              message.once('attributes', (attributes) => {
                const { uid } = attributes;
                imap.addFlags(uid, ['\\Seen'], () => {
                  // Mark the email as read after reading it
                  console.log('Marked as read!');
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

    return result;
  }
}
