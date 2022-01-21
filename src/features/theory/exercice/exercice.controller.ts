import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ExerciseService } from './exercice.service';
import {
  ExercisesQueryDto,
  ExerciseUpsertDto,
  LevelsQueryDto,
} from '@core/data';

@Controller('exercises')
export class ExerciceController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  public create(@Body() createExerciceDto: ExerciseUpsertDto) {
    return this.exerciseService.create(createExerciceDto);
  }

  @Get()
  public findAll(@Query() query: unknown) {
    return this.exerciseService.findAll(new ExercisesQueryDto(query));
  }

  @Get(':id')
  public findOne(@Param() id: LevelsQueryDto) {
    return this.exerciseService.findOne(+id);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateExerciceDto: ExerciseUpsertDto,
  ) {
    return this.exerciseService.update(+id, updateExerciceDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.exerciseService.remove(+id);
  }
}
