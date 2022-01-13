import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Group } from '../../core/entities/group';
import { Asset, Level, Mouvement } from '../../core/entities/models';

import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Level, Group, Mouvement, Asset])],
  providers: [LevelsService],
  controllers: [LevelsController],
})
export class LevelsModule {}
