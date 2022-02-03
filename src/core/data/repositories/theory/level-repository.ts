import { EntityRepository, Repository } from 'typeorm'
import { QueryBuilder } from '@core/querybuilder'
import { LevelsQueryDto } from '@core/data/DTO'
import { Level } from '@core/data/models'

@EntityRepository(Level)
export class LevelRepository extends Repository<Level> {
  public createLevel(level: Level): Promise<Level> {
    return this.save<Level>(level)
  }

  public getLevelById(id: string): Promise<Level> {
    return this.findOne(id)
  }

  public getLevels(query: LevelsQueryDto): Promise<Level[]> {
    return QueryBuilder<Level>(query)
  }

  public getLevelByPages(
    currentPage: number,
    pageSize: number,
  ): Promise<Level[]> {
    let order: { [key: string]: 'ASC' | 'DESC' } = {}
    order['name'] = 'ASC'
    return this.find({
      order: order,
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    })
  }
}
