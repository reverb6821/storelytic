import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['statusId'])
export class Status {
    @PrimaryGeneratedColumn()
      statusId!: number;

    @Column()
      name!: string;
}
