import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { User } from '../src/entity/User';

export class CreateUser1641591118225 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const user = new User();
    user.email = 'user@storelytic.org';
    user.password = 'user';
    user.hashPassword();
    user.role = 'USER';
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // nousued function
  }
}
