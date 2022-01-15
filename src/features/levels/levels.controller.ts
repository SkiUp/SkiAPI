import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LevelCreateDto, LevelUpdateDto } from '@core/data/DTO/levels';

import { Level } from '@core/data/models';
import { LevelsService } from './levels.service';

@Controller('levels')
export class LevelsController {
  constructor(private levelsService: LevelsService) {}

  @Post()
  public async create(@Body() createUserDto: LevelCreateDto): Promise<Level> {
    return this.levelsService.create(createUserDto);
  }

  @Get()
  public async findAll(): Promise<Level[]> {
    return this.levelsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Level> {
    return this.levelsService.findOne(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateUserDto: LevelUpdateDto,
  ): Promise<Level> {
    return this.levelsService.update(id, updateUserDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<boolean> {
    return this.levelsService.remove(id);
  }
}
