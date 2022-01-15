import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from '.';
import { MouvementCategory } from '../../enum';

@Entity()
export class Mouvement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({type:'enum', enum: MouvementCategory})
  mouvementCategory: MouvementCategory;

  @Column()
  startLevelId: string;

  @ManyToMany(
    () => Exercise,
    type => type.mouvement,
  )
  exerises: Exercise;
}
