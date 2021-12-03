import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
} from 'typeorm';

@Entity()
@Unique(['id'])
export class Direction {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
}