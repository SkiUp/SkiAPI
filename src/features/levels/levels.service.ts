import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelsQueryDto, LevelUpsertDto } from '@core/data/DTO/levels';

import { Level } from '@core/data/models';
import { QueryBuilder } from '@core/querybuilder';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level)
    private levelsRepository: Repository<Level>,
  ) {}

  public create(createLevelDto: LevelUpsertDto): Level {
    return this.levelsRepository.create();
  }
  public findOne(levelId: string): Promise<Level> {
    return this.levelsRepository.findOne(levelId);
  }

  public async findAll(query: LevelsQueryDto): Promise<Level[]> {
    const levels = await QueryBuilder<Level>(query);
    return levels;
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
