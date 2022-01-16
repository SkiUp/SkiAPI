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

import {
  LevelDto,
  LevelsQueryDto,
  LevelUpsertDto,
} from '@core/data/DTO/levels';

import { Level } from '@core/data/models';
import { LevelsService } from './levels.service';

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
  public create(@Body() createExerciceDto: LevelUpsertDto): LevelDto {
    const level = this.levelsService.create(createExerciceDto);
    return this._mapper.map(level, LevelDto, Level);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all Level' })
  @ApiResponse({
    status: 200,
    type: LevelDto,
    isArray: true,
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorised.',
  })
  public async findAll(@Query() query: { query: string }): Promise<LevelDto[]> {
    // TODO make this nicer
    const levels = await this.levelsService.findAll(
      new LevelsQueryDto(JSON.parse(query.query)),
    );
    console.log(levels);
    const output = this._mapper.mapArray(levels, LevelDto, Level);
    console.log(output);
    return output;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Create a Level' })
  @ApiResponse({
    status: 200,
    description: 'The created Level',
    type: LevelDto,
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorised',
  })
  public async findOne(@Param('id') id: string) {
    return this.levelsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Create a Level' })
  @ApiResponse({
    status: 200,
    description: ' Updated Level',
    type: LevelDto,
  })
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
  @ApiResponse({
    status: 200,
    description: 'Deleted Level',
    type: LevelDto,
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorised.',
  })
  public async remove(@Param('id') id: string) {
    return this.levelsService.remove(id);
  }
}
