import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Level,
  Exercise,
  Mouvement,
  Asset,
  LevelRepository,
  ExerciseRepository,
} from '@core/data';
import { ExerciceModule } from './exercice';
import { LevelsModule } from './levels';
import { MouvementsModule } from './mouvements';
import { MapperModule } from '@core/mapper';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Level,
      Exercise,
      Mouvement,
      Asset,
      LevelRepository,
      ExerciseRepository,
    ]),
    MapperModule,
    LevelsModule,
    ExerciceModule,
    MouvementsModule,
  ],
  exports: [TypeOrmModule],
})
export class TheoryModule {}
