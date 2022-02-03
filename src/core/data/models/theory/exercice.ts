import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExerciseTypes, SlopeTypes } from '../../enum';
import { AuditableEntity, Asset } from '../core';
import { Level } from './level';
import { Movement } from './movement';

@Entity()
export class Exercise extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: SlopeTypes })
  slopeType: SlopeTypes;

  @Column({ type: 'enum', enum: ExerciseTypes })
  type: ExerciseTypes;

  @ManyToOne(() => Level, (level) => level.exercises)
  level: Level;
  @Column()
  levelId: string;

  @ManyToMany(() => Movement, (type) => type.exerises)
  movement: Movement;

  @Column()
  movementId: string;

  @Column()
  isOfficial: boolean;

  @OneToOne(() => Asset)
  asset: Asset;
}
