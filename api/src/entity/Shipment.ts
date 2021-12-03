import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm';

import { Direction } from './Direction';

@Entity()
@Unique(['id'])
export class Shipment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @OneToMany(type => Direction, direction => direction.id)
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