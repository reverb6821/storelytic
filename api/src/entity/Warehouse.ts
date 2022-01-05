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

import { Length } from 'class-validator';

import { Product } from './Product';

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

    @ManyToOne((type) => Product)
    @JoinColumn({ name: 'product', referencedColumnName: 'productId' })
      product!: Product;
}
