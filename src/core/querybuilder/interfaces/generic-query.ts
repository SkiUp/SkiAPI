import { QueryFilters } from './query-filters';

export interface GenericQuery {
  className: string;
  filters: QueryFilters<unknown>[];
}
