import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Level,
  Exercise,
  Movement,
  Asset,
  LevelRepository,
  ExerciseRepository,
  MovementRepository,
} from '@core/data';
import { MapperModule } from '@core/mapper';

import { ExerciceModule } from './exercice';
import { LevelsModule } from './levels';
import { MovementsModule } from './movements';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Level,
      Exercise,
      Movement,
      Asset,
      LevelRepository,
      ExerciseRepository,
      MovementRepository
    ]),
    MapperModule,
    LevelsModule,
    ExerciceModule,
    MovementsModule,
  ],
  exports: [TypeOrmModule],
})
export class TheoryModule {}
