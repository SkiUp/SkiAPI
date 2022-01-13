import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ExericeTypes } from './exercice-type.enum';
import { Level } from './level';

@Entity('Exercice', { schema: 'ski' })
export class Exercice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  terrain: string;

  @Column({type: "enum", enum:ExericeTypes})
  type: ExericeTypes;

  @ManyToOne(
    () => Level,
    level => level.exercices,
  )
  level: Level;

  constructor(
    id: string,
    description: string,
    terrain: string,
    type: number,
    level: Level,
  ) {
    this.id = id;
    this.description = description;
    this.terrain = terrain;
    this.type = type;
    this.level = level;
  }
}
