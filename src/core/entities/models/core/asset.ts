import { PrimaryGeneratedColumn, Column, OneToOne, Entity } from 'typeorm';
import { Exercice } from '..';
import { AuditableEntity } from './auditable-entity';

// todo exercice link
@Entity()
export class Asset extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  link: string;

  @OneToOne(() => Exercice)
  exercice: Exercice;
}
