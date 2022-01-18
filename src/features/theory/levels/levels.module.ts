import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Asset, Exercise, Level, Mouvement } from '@core/data/models';
import { MapperModule } from '@core/mapper/mapper.module';
import { LevelRepository } from '@core/data';

import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';

@Module({
  imports: [
    MapperModule,
    TypeOrmModule.forFeature([
      Level,
      Exercise,
      Mouvement,
      Asset,
      LevelRepository,
    ]),
  ],
  providers: [LevelsService],
  controllers: [LevelsController],
  exports: [TypeOrmModule],
})
export class LevelsModule {}
