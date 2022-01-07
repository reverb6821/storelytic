import { Length } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Product } from './Product';

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

    @Column()
      logourl!: string;

    @Column()
      note!: string;
}
