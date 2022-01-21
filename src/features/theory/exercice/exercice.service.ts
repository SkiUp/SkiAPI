import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import {
  ExerciseUpsertDto,
  ExerciseRepository,
  Exercise,
  ExercisesQueryDto,
} from '@core/data';
import { QueryBuilder } from '@app/core/querybuilder';

@Injectable()
export class ExerciseService {
  constructor(
    private _repository: ExerciseRepository,
    @InjectMapper() private _mapper: Mapper,
  ) {}
  public create(createExerciceDto: ExerciseUpsertDto) {
    const exercise = this._mapper.map(
      createExerciceDto,
      Exercise,
      ExerciseUpsertDto,
    );
    return this._repository.createExercise(exercise);
  }

  public findAll(query: ExercisesQueryDto) {
    return QueryBuilder(query);
  }

  public findOne(id: number) {
    return `This action returns a #${id} exercice`;
  }

  public update(id: number, updateExerciceDto: ExerciseUpsertDto) {
    return `This action updates a #${id} exercice`;
  }

  public remove(id: number) {
    return `This action removes a #${id} exercice`;
  }
}
