import { EmailAddress } from 'mailparser';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('InboxEmail')
export class InboxEmail {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  subject: string;

  @Column()
  email: string;

  // @Column({ nullable: true })
  // text: EmailAddress[];
}
