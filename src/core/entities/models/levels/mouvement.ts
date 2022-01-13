import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exercice } from '.';
import { MouvementCategory } from '../../enum';

@Entity()
export class Mouvement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  mouvementCategory: MouvementCategory;

  @Column()
  startLevelId: string;

  @ManyToMany(
    () => Exercice,
    type => type.mouvement,
  )
  exerices: Exercice;
}
