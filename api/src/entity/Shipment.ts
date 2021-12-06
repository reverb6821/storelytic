import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import { Direction } from './Direction';

@Entity()
@Unique(['shipmentId'])
export class Shipment {
    @PrimaryGeneratedColumn()
    shipmentId!: number;

    @ManyToOne(type => Direction)
    @JoinColumn({name: 'direction', referencedColumnName:'directionId'})
    direction!: Direction;

    @Column()
    provider!: string;

    @Column()
    trackingNr!: string;

    @Column()
    @CreateDateColumn()
    dateShipment!: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt!: Date;

    @Column()
    arrived!: boolean;
}