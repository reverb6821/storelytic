import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
} from 'typeorm';

@Entity()
@Unique(['directionId'])
export class Direction {
    @PrimaryGeneratedColumn()
    directionId!: number;

    @Column()
    name!: string;
}