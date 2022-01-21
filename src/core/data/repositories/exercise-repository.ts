import { EntityRepository, Repository } from 'typeorm';
import { Exercise } from '@core/data/models';
import { QueryBuilder } from '@core/querybuilder';
import { ExercisesQueryDto } from '../DTO';

@EntityRepository(Exercise)
export class ExerciseRepository extends Repository<Exercise> {
  public createExercise(exercise: Exercise): Promise<Exercise> {
    return this.save<Exercise>(exercise);
  }

  public getExerciseById(id: string): Promise<Exercise> {
    return this.findOne(id);
  }

  public getExercises(query: ExercisesQueryDto): Promise<Exercise[]> {
    return QueryBuilder<Exercise>(query);
  }

  public async getExerciseByPages(
    currentPage: number,
    pageSize: number,
  ): Promise<Exercise[]> {
    let order: { [key: string]: 'ASC' | 'DESC' } = {};
    order['name'] = 'ASC';
    let exercises = await this.find({
      order: order,
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    });
    return exercises;
  }
}
