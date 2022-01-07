import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Direction } from '../src/entity/Direction';

export class CreateDirectionIn1641590848089 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const direction = new Direction();
    direction.name = 'INBOUND';
    const directionRepository = getRepository(Direction);
    await directionRepository.save(direction);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // nousued function
  }
}
