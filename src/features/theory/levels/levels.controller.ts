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
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { InjectMapper } from '@automapper/nestjs'
import { Mapper } from '@automapper/core'

import { Level, LevelDto, LevelUpsertDto, LevelsQueryDto } from '@core/data'
import { TheoryFactory } from '@app/core/factories'

import { LevelsService } from './levels.service'

@ApiTags('levels')
@Controller('levels')
export class LevelsController {
  constructor(
    private readonly _levelsService: LevelsService,
    private readonly _theoryFactory: TheoryFactory,
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
    const level = await this._levelsService.create(createExerciceDto)
    return this._mapper.map(level, LevelDto, Level)
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all Level' })
  @ApiResponse({ status: 200, type: LevelDto, isArray: true })
  public async findAll(@Query() query: unknown): Promise<LevelDto[]> {
    const levels = await this._levelsService.findAll(new LevelsQueryDto(query))
    const output = this._mapper.mapArray(levels, LevelDto, Level)
    return output
  }

  @Get(':id')
  @ApiOperation({ summary: "Get a Level by it's id" })
  @ApiResponse({ status: 200, type: LevelDto })
  public async findOne(@Param('id') id: string) {
    return this._levelsService.findOne(id)
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
    return this._levelsService.update(id, updateExerciceDto)
  }

  @Post('seed')
  @ApiOperation({ summary: 'Create all base levels exercises movements' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorised.',
  })
  public async seed(): Promise<unknown> {
    // const level = await this.levelsService.seed();
    // return this._mapper.mapArray(level, LevelDto, Level);
    return this._theoryFactory.generateBase()
  }
}
