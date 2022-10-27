import { EmailAddress } from 'mailparser';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Email')
export class InboxEmail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subject: string;

  @Column()
  address: string;

  @Column()
  text: string | EmailAddress[];
}
