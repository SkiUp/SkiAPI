import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Asset, Exercise, Level, Mouvement } from '@core/data/models';

import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { MouvementsModule } from './mouvements/mouvements.module';
import { ExerciceModule } from './exercice/exercice.module';
import { MapperModule } from '@core/mapper/mapper.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Level, Exercise, Mouvement, Asset]),
    MouvementsModule,
    MapperModule,
    ExerciceModule,
  ],
  providers: [LevelsService],
  controllers: [LevelsController],
})
export class LevelsModule {}
