import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { MouvementsService } from './mouvements.service';

@Controller('mouvements')
export class MouvementsController {
  constructor(private readonly mouvementsService: MouvementsService) {}

  @Post()
  public create(@Body() createMouvementDto: unknown) {
    return this.mouvementsService.create(createMouvementDto);
  }

  @Get()
  public findAll() {
    return this.mouvementsService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.mouvementsService.findOne(+id);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updateMouvementDto: unknown) {
    return this.mouvementsService.update(+id, updateMouvementDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.mouvementsService.remove(+id);
  }
}
