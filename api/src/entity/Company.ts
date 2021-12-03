import { Length } from 'class-validator';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    OneToMany
} from 'typeorm';

import { Product } from './Product';

@Entity()
@Unique(['id'])
export class Company {
    @PrimaryGeneratedColumn()
    id!: number;

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

    @Column()
    @OneToMany(type => Product, product => product.id)
    product!: Product;
}