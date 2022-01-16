import { ApiProperty } from '@nestjs/swagger';
import { Level } from '@core/data/models';
import { GenericQuery } from '@core/querybuilder/interfaces/generic-query';
import { QueryArrayFilter } from '@core/querybuilder/interfaces/query-filters';

export class LevelsQueryDto implements GenericQuery<Level> {
  className = 'level';

  @ApiProperty()
  levelIds: QueryArrayFilter<string>;

  @ApiProperty()
  priorLevelIds?: string[];
}
