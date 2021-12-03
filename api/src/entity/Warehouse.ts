import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';

import { Length } from 'class-validator';


import { Product } from './Product';

@Entity()
@Unique(['id'])
export class Warehouse{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @Length(4, 20)
    title!: string;

    @Column()
    @Length(4, 20)
    description!: string;

    @Column()
    position!: string;

    @Column()
    @OneToMany(() => Product, product => product.id)
    product!: Product;

}