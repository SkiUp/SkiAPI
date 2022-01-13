import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExericeTypes, SlopeTypes } from '../../enum';
import { AuditableEntity, Asset } from '../core';
import { Level } from './level';
import { Mouvement } from './mouvement';

@Entity()
export class Exercice extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: SlopeTypes })
  slopeType: SlopeTypes;

  @Column({ type: 'enum', enum: ExericeTypes })
  type: ExericeTypes;

  @ManyToOne(
    () => Level,
    level => level.exercices,
  )
  level: Level;

  @ManyToMany(
    () => Mouvement,
    type => type.exerices,
  )
  mouvement: Mouvement;
  @Column()
  isOfficial: boolean;

  @OneToOne(() => Asset)
  asset: Asset;
}
