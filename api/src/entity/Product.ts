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

import { Image } from './Image';
import { User } from './User';
import { Shipment } from './Shipment';
import { Status } from './Status';
import { Warehouse } from './Warehouse';

@Entity()
@Unique(['id'])
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @CreateDateColumn()
    createdAt!: Date;

    @Column()
    @Length(4, 20)
    title!: string;

    @Column()
    @Length(4, 20)
    description!: string;

    @Column()
    @Length(1, 20)
    qty!: number;

    @Column()
    @OneToMany(type => Image, image => image.product)
    image!: Image;

    @Column()
    @Length(1, 20)
    serialnumber!: number;

    @Column()
    @CreateDateColumn()
    entrydate!: Date;

    @Column()
    @CreateDateColumn()
    exitdate!: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt!: Date;

    @Column()
    @OneToMany(type => User, user => user.id)
    updatedby!: User;

    @Column()
    @OneToMany(type => Shipment, shipment => shipment.id)
    shipment!: Shipment;

    @Column()
    @OneToMany(type => Status, status => status.id)
    status!: Status;

    @Column()
    @OneToMany(type => Warehouse, warehouse => warehouse.id)
    warehouse!: Warehouse;
}