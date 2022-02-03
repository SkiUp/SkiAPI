import { Injectable } from '@nestjs/common'
import { Mapper } from '@automapper/core'
import { InjectMapper } from '@automapper/nestjs'
import {
  LevelUpsertDto,
  LevelRepository,
  MovementRepository,
  Level,
  Movement,
  Exercise,
  LevelsSeed,
  MovementSeed,
  ExerciseSeed,
  ExerciseRepository,
  ExerciseUpsertDto,
  AuditableEntity,
} from '@app/core/data'

@Injectable()
export class TheoryFactory {
  constructor(
    private _levelsRepository: LevelRepository,
    private _movementRepository: MovementRepository,
    private _exerciseRepository: ExerciseRepository,
    @InjectMapper() private _mapper: Mapper,
  ) {}

  public async generateBase() {
    // todo manage error
    try {
      await this._levelsRepository.query('DELETE FROM `level`')
    } catch (e) {
      console.trace(e)
      return
    }

    for (const levelsList of LevelsSeed) {
      const levelUpserts = this._mapper.mapArray(
        levelsList,
        Level,
        LevelUpsertDto,
      )
      let prevLevel = null
      for (const level of levelUpserts) {
        if (prevLevel) {
          level.priorLevelId = prevLevel.id
        }
        prevLevel = await this._levelsRepository.createLevel(level)
      }
    }
    const createdLevels = await this._levelsRepository.find()

    const movements = MovementSeed.map((element) => {
      const startLevelId = createdLevels.find(
        (level) => level.name === element.startLevelId,
      )?.id
      return {
        ...element,
        startLevelId,
      }
    })

    const createdMovements: Movement[] = await this._movementRepository.save(
      movements,
    )

    const createdExercises: Exercise[] = []
    for (const level of createdLevels) {
      const exercises = ExerciseSeed.filter((exercise) =>
        exercise.levelId.includes(level.name),
      )
      for (const exerciseDto of exercises) {
        const exerciseDtoMovement = createdMovements.find(
          (movement) => movement.name === exerciseDto.movementId,
        )
        const exercise: ExerciseUpsertDto & AuditableEntity = {
          ...exerciseDto,
          levelId: level.id,
          movementId: exerciseDtoMovement?.id || '',
          createdById: '00000000-0000-0000-0000-000000000000',
          updatedById: '00000000-0000-0000-0000-000000000000',
		  deletedAt: null,
        }

        createdExercises.push(await this._exerciseRepository.save(exercise))
      }
    }

    return { createdLevels, createdMovements, createdExercises }
  }
}
