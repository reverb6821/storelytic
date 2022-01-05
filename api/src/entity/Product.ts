import { Length } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Image } from './Image';
import { User } from './User';
import { Shipment } from './Shipment';
import { Status } from './Status';
import { Warehouse } from './Warehouse';

@Entity()
@Unique(['productId'])
export class Product {
    @PrimaryGeneratedColumn()
      productId!: number;

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

    @ManyToOne((type) => Image)
    @JoinColumn({ name: 'image', referencedColumnName: 'imageId' })
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

    @ManyToOne((type) => User)
    @JoinColumn({ name: 'user', referencedColumnName: 'id' })
      updatedby!: User;

    @ManyToOne((type) => Shipment)
    @JoinColumn({ name: 'shipment', referencedColumnName: 'shipmentId' })
      shipment!: Shipment;

    @ManyToOne((type) => Status)
    @JoinColumn({ name: 'status', referencedColumnName: 'statusId' })
      status!: Status;

    @ManyToOne((type) => Warehouse)
    @JoinColumn({ name: 'warehouse', referencedColumnName: 'warehouseId' })
      warehouse!: Warehouse;
}
