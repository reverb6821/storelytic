import { Length } from 'class-validator';
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

import { Product } from './Product';

@Entity()
@Unique(['imageId'])
export class Image {
    @PrimaryGeneratedColumn()
    imageId!: number;

    @Column()
    @Length(4, 20)
    url!: string;

    @Column()
    @Length(4, 20)
    title!: string;

    @ManyToOne(() => Product)
    @JoinColumn({name: 'product', referencedColumnName:'productId'})
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