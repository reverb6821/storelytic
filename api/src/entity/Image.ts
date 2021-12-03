import { Length } from 'class-validator';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';

import { Product } from './Product';

@Entity()
@Unique(['id'])
export class Image {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @Length(4, 20)
    url!: string;

    @Column()
    @Length(4, 20)
    title!: string;

    @Column()
    @OneToMany(type => Product, product => product.image)
    product!: Product;

    @Column()
    @Length(4, 20)
    description!: string;

    @Column()
    @CreateDateColumn()
    createdAt!: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt!: Date;
}