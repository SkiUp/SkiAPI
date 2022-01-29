import { EntityRepository, Repository } from 'typeorm';
import { Mouvement } from '@core/data/models';
import { QueryBuilder } from '@core/querybuilder';
import { ExercisesQueryDto } from '../DTO';

@EntityRepository(Mouvement)
export class MouvementRepository extends Repository<Mouvement> {
  public createMouvement(mouvement: Mouvement): Promise<Mouvement> {
    return this.save<Mouvement>(mouvement);
  }

  public getExerciseById(id: string): Promise<Mouvement> {
    return this.findOne(id);
  }

  public getExercises(query: ExercisesQueryDto): Promise<Mouvement[]> {
    return QueryBuilder<Mouvement>(query);
  }
}
