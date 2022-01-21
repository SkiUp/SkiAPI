import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MapperModule } from '@core/mapper';
import { ExerciseRepository } from '@core/data';
import { ExerciseService } from './exercice.service';
import { ExerciceController } from './exercice.controller';

@Module({
  imports: [MapperModule, TypeOrmModule.forFeature([ExerciseRepository])],
  controllers: [ExerciceController],
  providers: [ExerciseService],
})
export class ExerciceModule {}
