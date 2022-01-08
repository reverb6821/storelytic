import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Status } from '../src/entity/Status';

export class CreateStatusRTD1641592581189 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const status = new Status();
    status.name = 'READY_TO_DEPLOY';
    const statusRepository = getRepository(Status);
    await statusRepository.save(status);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // no unusued
  }
}
