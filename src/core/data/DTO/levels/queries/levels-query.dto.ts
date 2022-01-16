import { ApiProperty } from '@nestjs/swagger';
import { GenericQuery } from '@core/querybuilder/interfaces/generic-query';
import { QueryFilters } from '@core/querybuilder';

export class LevelsQueryDto implements GenericQuery {
  className = 'level';

  @ApiProperty()
  filters: QueryFilters<unknown>[];

  constructor(query: LevelsQueryDto) {
    this.className = 'level';
    this.filters = query.filters;
  }
}
