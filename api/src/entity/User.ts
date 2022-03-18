import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Length, IsNotEmpty } from 'class-validator';
import * as bcrypt from 'bcryptjs';
import { Role } from './Role';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
  @Length(4, 20)
    email!: string;

  @Column()
  @Length(4, 100)
    password!: string;

  @Column()
  @ManyToOne((type) => Role, (role) => role.roleId)
  @JoinColumn({ name: 'role', referencedColumnName: 'roleId' })
  @IsNotEmpty()
    role!: Role;

  @Column()
  @CreateDateColumn()
    createdAt!: Date;

  @Column()
  @UpdateDateColumn()
    updatedAt!: Date;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
