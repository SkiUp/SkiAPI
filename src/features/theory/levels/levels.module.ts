import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MapperModule } from '@core/mapper'
import {
  ExerciseRepository,
  LevelRepository,
  MovementRepository,
} from '@core/data'

import { LevelsService } from './levels.service'
import { LevelsController } from './levels.controller'
import { TheoryFactory } from '@app/core/factories/theory/theory.factory'

@Module({
  imports: [
    MapperModule,
    TypeOrmModule.forFeature([
      LevelRepository,
      ExerciseRepository,
      MovementRepository,
    ]),
  ],
  providers: [LevelsService, TheoryFactory],
  controllers: [LevelsController],
  exports: [TypeOrmModule],
})
export class LevelsModule {}
