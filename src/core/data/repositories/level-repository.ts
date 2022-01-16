import { EntityRepository, Repository } from 'typeorm';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

import { Level } from '@core/data/models';
import { QueryBuilder } from '@core/querybuilder';
import { LevelUpsertDto, LevelDto, LevelsQueryDto } from '../DTO/levels';

@EntityRepository(Level)
export class LevelRepository extends Repository<Level> {
  constructor(@InjectMapper() private _mapper: Mapper) {
    super();
  }

  public createLevel(levelUpsertDto: LevelUpsertDto): Promise<Level> {
    let level: Level = this._mapper.map(levelUpsertDto, Level, LevelUpsertDto);
    // TODO this is undefined ???
    return this.save<Level>(level);
  }

  public async getLevelById(id: string): Promise<LevelDto> {
    let level = await this.findOne(id);
    return this._mapper.map(level, LevelDto, Level);
  }

  public getLevels(query: LevelsQueryDto): Promise<Level[]> {
    return QueryBuilder<Level>(query);
  }

  public async getLevelByPages(
    currentPage: number,
    pageSize: number,
  ): Promise<LevelDto[]> {
    let order: { [key: string]: 'ASC' | 'DESC' } = {};
    order['name'] = 'ASC';
    let levels = await this.find({
      order: order,
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    });
    return this._mapper.mapArray(levels, LevelDto, Level);
  }
}
