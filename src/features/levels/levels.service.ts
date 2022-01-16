import { Injectable } from '@nestjs/common';
import { LevelsQueryDto, LevelUpsertDto } from '@core/data/DTO/levels';

import { Level } from '@core/data/models';
import { LevelRepository } from '@core/data';
import { sortLevels } from '@shared/utils';

@Injectable()
export class LevelsService {
  constructor(private levelsRepository: LevelRepository) {}

  public async create(createLevelDto: LevelUpsertDto): Promise<Level> {
    return this.levelsRepository.createLevel(createLevelDto);
    // const level = await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Level)
    //   .values([createLevelDto])
    //   .execute();
    // const levels = await this.levelsRepository.find({
    //   where: { id: In(level.identifiers.map((id) => id.id)) },
    // });
    // return levels[0];
  }

  public findOne(levelId: string): Promise<Level> {
    return this.levelsRepository.findOne(levelId);
  }

  public async findAll(query: LevelsQueryDto): Promise<Level[]> {
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
