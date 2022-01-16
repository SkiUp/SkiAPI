import { ApiProperty } from '@nestjs/swagger';
import { GenericQuery } from '@core/querybuilder/interfaces/generic-query';
import { QueryFilters } from '@core/querybuilder';
import { queryParamFixer } from '@shared/utils/query-param-fixer';

export class LevelsQueryDto implements GenericQuery {
  className = 'level';

  @ApiProperty()
  filters: QueryFilters<unknown>[];

  constructor(queryIn?: unknown) {
    this.className = 'level';
    const query: LevelsQueryDto = queryParamFixer(queryIn);
    this.filters = query.filters;
  }
}
