import {
  Entity, PrimaryGeneratedColumn, Column, Unique,
} from 'typeorm';

@Entity()
@Unique(['roleId'])
export class Role {
  @PrimaryGeneratedColumn()
    roleId!: number;

  @Column()
    title!: string;
}
