import { Module } from '@nestjs/common';
import { exerciseservice } from './exercice.service';
import { ExerciceController } from './exercice.controller';

@Module({
  controllers: [ExerciceController],
  providers: [exerciseservice]
})
export class ExerciceModule {}
