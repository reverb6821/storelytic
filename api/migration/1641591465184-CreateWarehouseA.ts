import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Warehouse } from '../src/entity/Warehouse';

export class CreateWarehouse1641591465184 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const warehouse = new Warehouse();
    warehouse.title = 'Warehouse A';
    warehouse.description = 'Warehouse A';
    warehouse.position = 'RM';
    const warehouseRepository = getRepository(Warehouse);
    await warehouseRepository.save(warehouse);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  // nounusued
  }
}
