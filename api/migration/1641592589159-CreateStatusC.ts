import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Status } from '../src/entity/Status';

export class CreateStatusC1641592589159 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const status = new Status();
    status.name = 'SHIPPED';
    const statusRepository = getRepository(Status);
    await statusRepository.save(status);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // no unusued
  }
}
