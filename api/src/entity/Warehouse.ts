import {
  Entity, PrimaryGeneratedColumn, Column, Unique,
} from 'typeorm';

import { Length } from 'class-validator';

@Entity()
@Unique(['warehouseId'])
export class Warehouse {
  @PrimaryGeneratedColumn()
    warehouseId!: number;

  @Column()
  @Length(4, 20)
    title!: string;

  @Column()
  @Length(4, 20)
    description!: string;

  @Column()
    position!: string;
}
