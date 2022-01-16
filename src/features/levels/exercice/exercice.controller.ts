import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { exerciseservice } from './exercice.service';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';
import { LevelsQueryDto } from '@core/data/DTO/levels';

@Controller('exercice')
export class ExerciceController {
  constructor(private readonly exerciseService: exerciseservice) {}

  @Post()
  public create(@Body() createExerciceDto: CreateExerciceDto) {
    return this.exerciseService.create(createExerciceDto);
  }

  @Get()
  public findAll() {
    return this.exerciseService.findAll();
  }

  @Get(':id')
  public findOne(@Param() id: LevelsQueryDto) {
    return this.exerciseService.findOne(+id);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateExerciceDto: UpdateExerciceDto,
  ) {
    return this.exerciseService.update(+id, updateExerciceDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.exerciseService.remove(+id);
  }
}
