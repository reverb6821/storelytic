import { Length } from 'class-validator';
import {
  Entity, PrimaryGeneratedColumn, Column, Unique,
} from 'typeorm';

@Entity()
@Unique(['companyId'])
export class Company {
  @PrimaryGeneratedColumn()
    companyId!: number;

  @Column()
  @Length(4, 20)
    title!: string;

  @Column()
  @Length(4, 20)
    description!: string;

  @Column({ type: 'longblob', nullable: true })
    logo!: Buffer;

  @Column()
    note!: string;
}
