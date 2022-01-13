import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Asset, Exercice, Level, Mouvement } from '../../core/entities/models';

import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Level, Exercice, Mouvement, Asset])],
  providers: [LevelsService],
  controllers: [LevelsController],
})
export class LevelsModule {}
