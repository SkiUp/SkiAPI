import { EntityRepository, Repository } from 'typeorm'

import { QueryBuilder } from '@core/querybuilder'
import { ExercisesQueryDto } from '@core/data/DTO'
import { Movement } from '@core/data/models'

@EntityRepository(Movement)
export class MovementRepository extends Repository<Movement> {
  public createMovement(movement: Movement): Promise<Movement> {
    return this.save<Movement>(movement)
  }

  public getExerciseById(id: string): Promise<Movement> {
    return this.findOne(id)
  }

  public getExercises(query: ExercisesQueryDto): Promise<Movement[]> {
    return QueryBuilder<Movement>(query)
  }
}
