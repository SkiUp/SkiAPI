import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './group';
import { Login } from './login';
import { Departementstaff } from './models/permissions';

@Entity('User', { schema: 'ski' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password?: string;

  @OneToMany(
    () => Departementstaff,
    departementstaff => departementstaff.user,
  )
  departementstaffs: Departementstaff[];

  @OneToMany(
    () => Group,
    group => group.teacher,
  )
  groups: Group[];

  @OneToMany(
    () => Login,
    login => login.user,
  )
  logins: Login[];
}
