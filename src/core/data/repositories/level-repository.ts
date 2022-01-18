import { EntityRepository, Repository } from 'typeorm';
import { Level } from '@core/data/models';
import { QueryBuilder } from '@core/querybuilder';
import { LevelsQueryDto } from '../DTO/levels';

@EntityRepository(Level)
export class LevelRepository extends Repository<Level> {
  public createLevel(level: Level): Promise<Level> {
    return this.save<Level>(level);
  }

  public async getLevelById(id: string): Promise<Level> {
    return await this.findOne(id);
  }

  public getLevels(query: LevelsQueryDto): Promise<Level[]> {
    return QueryBuilder<Level>(query);
  }

  public async getLevelByPages(
    currentPage: number,
    pageSize: number,
  ): Promise<Level[]> {
    let order: { [key: string]: 'ASC' | 'DESC' } = {};
    order['name'] = 'ASC';
    let levels = await this.find({
      order: order,
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    });
    return levels;
  }
}
