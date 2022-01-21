import { ApiProperty } from '@nestjs/swagger';
import { GenericQuery } from '@core/querybuilder/interfaces/generic-query';
import { QueryFilters } from '@core/querybuilder';
import { queryParamFixer } from '@shared/utils/query-param-fixer';

export class ExercisesQueryDto implements GenericQuery {
  className = 'exercise';

  @ApiProperty()
  filters: QueryFilters<unknown>[];

  constructor(queryIn?: unknown) {
    this.className = 'exercise';
    const query: ExercisesQueryDto = queryParamFixer(queryIn);
    this.filters = query.filters;
  }
}
