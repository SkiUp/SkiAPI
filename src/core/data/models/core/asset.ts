import { PrimaryGeneratedColumn, Column, OneToOne, Entity } from 'typeorm';
import { Exercise } from '..';
import { AuditableEntity } from './auditable-entity';

@Entity()
export class Asset extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  link: string;

  @OneToOne(() => Exercise)
  exercise: Exercise;
}
