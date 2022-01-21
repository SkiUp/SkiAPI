import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExeriseTypes, SlopeTypes } from '../../enum';
import { AuditableEntity, Asset } from '../core';
import { Level } from './level';
import { Mouvement } from './mouvement';

@Entity()
export class Exercise extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: SlopeTypes })
  slopeType: SlopeTypes;

  @Column({ type: 'enum', enum: ExeriseTypes })
  type: ExeriseTypes;

  @ManyToOne(() => Level, (level) => level.exercises)
  level: Level;
  @Column()
  levelId: string;

  @ManyToMany(() => Mouvement, (type) => type.exerises)
  mouvement: Mouvement;
  @Column()
  mouvementId: string;

  @Column()
  isOfficial: boolean;

  @OneToOne(() => Asset)
  asset: Asset;
}
