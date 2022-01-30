import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Company } from '../src/entity/Company';

export class CreateCompanyA1641592019374 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const company = new Company();
    company.title = 'Company A';
    company.description = 'Company A';
    company.logo = 'MI';
    company.note = 'note for Company A';
    const companyRepository = getRepository(Company);
    await companyRepository.save(company);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // nou nused
  }
}
