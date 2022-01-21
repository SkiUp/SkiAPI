import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Level, LevelRepository, LevelUpsertDto } from '@core/data';
import { GenericQuery } from '@core/querybuilder';
import { sortLevels } from '@shared/utils';

@Injectable()
export class LevelsService {
  constructor(
    private levelsRepository: LevelRepository,
    @InjectMapper() private _mapper: Mapper,
  ) {}

  public async create(createLevelDto: LevelUpsertDto): Promise<Level> {
    const level = this._mapper.map(createLevelDto, Level, LevelUpsertDto);
    return this.levelsRepository.createLevel(level);
  }

  public findOne(levelId: string): Promise<Level> {
    return this.levelsRepository.findOne(levelId);
  }

  public async findAll(query: GenericQuery): Promise<Level[]> {
    const levels = await this.levelsRepository.getLevels(query);
    const output = sortLevels(levels);
    console.log(output);
    return output;
  }

  public update(
    levelId: string,
    levelUpdateDto: LevelUpsertDto,
  ): Promise<Level> {
    throw new Error('Method not implemented.');
  }

  public remove(levelId: string): boolean {
    throw new Error('Method not implemented.');
  }
}
