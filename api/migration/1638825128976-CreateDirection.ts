import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { Direction } from '../src/entity/Direction';

export class CreateDirection1638825128976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let direction = new Direction();
        direction.name = 'OUTBOUND'
        const directionRepository = getRepository(Direction);
        await directionRepository.save(direction);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
