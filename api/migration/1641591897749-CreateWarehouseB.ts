import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Warehouse } from '../src/entity/Warehouse';

export class CreateWarehouseB1641591897749 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const warehouse = new Warehouse();
    warehouse.title = 'Warehouse B';
    warehouse.description = 'Warehouse B';
    warehouse.position = 'MI';
    const warehouseRepository = getRepository(Warehouse);
    await warehouseRepository.save(warehouse);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // no unusued
  }
}
