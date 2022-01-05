import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Product } from './Product';

@Entity()
@Unique(['statusId'])
export class Status {
    @PrimaryGeneratedColumn()
      statusId!: number;

    @Column()
      name!: string;

    @ManyToOne((type) => Product)
    @JoinColumn({ name: 'product', referencedColumnName: 'productId' })
      product!: Product;
}
