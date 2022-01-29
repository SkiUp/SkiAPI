import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { MouvementRepository } from '@core/data';
import { MapperModule } from '@core/mapper';

import { MouvementsService } from './mouvements.service';
import { MouvementsController } from './mouvements.controller';

@Module({
  imports: [MapperModule, TypeOrmModule.forFeature([MouvementRepository])],
  providers: [MouvementsService],
  controllers: [MouvementsController],
  exports: [TypeOrmModule],
})
export class MouvementsModule {}
