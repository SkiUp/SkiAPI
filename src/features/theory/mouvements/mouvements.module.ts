import { Module } from '@nestjs/common';
import { MouvementsService } from './mouvements.service';
import { MouvementsController } from './mouvements.controller';

@Module({
  controllers: [MouvementsController],
  providers: [MouvementsService]
})
export class MouvementsModule {}
