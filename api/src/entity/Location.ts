import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    OneToMany
} from 'typeorm';

import { Warehouse } from './Warehouse';
import { Product } from './Product';

@Entity()
@Unique(['id'])
export class Location {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    description!: string;

    @Column()
    @OneToMany(type => Warehouse, warehouse => warehouse.id)
    warehouse!: Warehouse;

    @Column("text", {
        array: true
    })
    @OneToMany(type => Product, product => product.id)
    product!: Product;
}