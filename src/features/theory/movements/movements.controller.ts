import { MovementUpsertDto } from '@app/core/data'
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'

import { MovementsService } from './movements.service'

@Controller('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService) {}

  @Post()
  public create(@Body() createMovementDto: MovementUpsertDto) {
    return this.movementsService.create(createMovementDto)
  }

  @Get()
  public findAll() {
    return this.movementsService.findAll()
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.movementsService.findOne(+id)
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updateMovementDto: unknown) {
    return this.movementsService.update(+id, updateMovementDto)
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.movementsService.remove(+id)
  }
}
