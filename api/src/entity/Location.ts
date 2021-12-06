import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    OneToMany,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import { Warehouse } from './Warehouse';
import { Product } from './Product';

@Entity()
@Unique(['locationId'])
export class Location {
    @PrimaryGeneratedColumn()
    locationId!: number;

    @Column()
    description!: string;

    @ManyToOne(type => Warehouse)
    @JoinColumn({name: 'warehouse', referencedColumnName:'warehouseId'})
    warehouse!: Warehouse;

    @ManyToOne(type => Product)
    @JoinColumn({name: 'product', referencedColumnName:'productId'})
    product!: Product;
}