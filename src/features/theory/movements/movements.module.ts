import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { MovementRepository } from '@core/data';
import { MapperModule } from '@core/mapper';

import { MovementsService } from './movements.service';
import { MovementsController } from './movements.controller';

@Module({
  imports: [MapperModule, TypeOrmModule.forFeature([MovementRepository])],
  providers: [MovementsService],
  controllers: [MovementsController],
  exports: [TypeOrmModule],
})
export class MovementsModule {}
