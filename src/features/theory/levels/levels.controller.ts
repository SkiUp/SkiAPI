import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

import { Level, LevelDto, LevelUpsertDto } from '@core/data';

import { LevelsService } from './levels.service';
import { LevelsQueryDto } from '@app/core/data/DTO/levels/queries/levels-query.dto';

@ApiTags('Levels')
@Controller('levels')
export class LevelsController {
  constructor(
    private readonly levelsService: LevelsService,
    @InjectMapper() private _mapper: Mapper,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a Level' })
  @ApiResponse({
    status: 200,
    description: 'The created Level',
    type: LevelDto,
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorised.',
  })
  public async create(
    @Body() createExerciceDto: LevelUpsertDto,
  ): Promise<LevelDto> {
    const level = await this.levelsService.create(createExerciceDto);
    return this._mapper.map(level, LevelDto, Level);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all Level' })
  @ApiResponse({ status: 200, type: LevelDto, isArray: true })
  public async findAll(@Query() query: unknown): Promise<LevelDto[]> {
    const levels = await this.levelsService.findAll(new LevelsQueryDto(query));
    const output = this._mapper.mapArray(levels, LevelDto, Level);
    return output;
  }

  @Get(':id')
  @ApiOperation({ summary: "Get a Level by it's id" })
  @ApiResponse({ status: 200, type: LevelDto })
  public async findOne(@Param('id') id: string) {
    return this.levelsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Level' })
  @ApiResponse({ status: 200, type: LevelDto })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorised.',
  })
  public async update(
    @Param('id') id: string,
    @Body() updateExerciceDto: LevelUpsertDto,
  ) {
    return this.levelsService.update(id, updateExerciceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Level' })
  @ApiResponse({ status: 200, type: LevelDto })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorised.',
  })
  public async remove(@Param('id') id: string) {
    return this.levelsService.remove(id);
  }
}
