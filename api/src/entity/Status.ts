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
export class Status {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    @OneToMany(type => Product, product => product.id)
    product!: Product;

}