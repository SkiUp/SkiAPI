import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise as Exercise } from './exercice';

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
    () => Exercise,
    exercice => exercice.level,
  )
  exercises: Exercise[];
}
