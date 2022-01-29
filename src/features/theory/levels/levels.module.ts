import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MapperModule } from '@core/mapper';
import { LevelRepository } from '@core/data';

import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';

@Module({
  imports: [MapperModule, TypeOrmModule.forFeature([LevelRepository])],
  providers: [LevelsService],
  controllers: [LevelsController],
  exports: [TypeOrmModule],
})
export class LevelsModule {}
