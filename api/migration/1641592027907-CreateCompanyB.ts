import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Company } from '../src/entity/Company';

export class CreateCompanyB1641592027907 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const company = new Company();
    company.title = 'Company B';
    company.description = 'Company B';
    company.logourl = 'MI';
    company.note = 'note for Company B';
    const companyRepository = getRepository(Company);
    await companyRepository.save(company);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // no unusued
  }
}
