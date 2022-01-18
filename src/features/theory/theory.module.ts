import { Module } from '@nestjs/common';

import { ExerciceModule } from './exercice';
import { LevelsModule } from './levels';
import { MouvementsModule } from './mouvements';

@Module({
  imports: [LevelsModule, ExerciceModule, MouvementsModule],
})
export class TheoryModule {}
