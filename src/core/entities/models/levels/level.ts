import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exercice } from './exercice';

@Entity()
export class Level {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  priorLevelId?: string;

  @OneToMany(
    () => Exercice,
    exercice => exercice.level,
  )
  exercices: Exercice[];
}
