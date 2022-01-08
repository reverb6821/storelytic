import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Status } from '../src/entity/Status';

export class CreateStatusPending1641592597338 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const status = new Status();
    status.name = 'PENDING';
    const statusRepository = getRepository(Status);
    await statusRepository.save(status);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // no unusued
  }
}
