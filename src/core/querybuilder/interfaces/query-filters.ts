import { Level } from '@core/data';
import { QueryOperators } from '../enums';
import { GenericQuery } from './generic-query';

interface QueryFilter {
  filterType: 'array' | 'property' | 'object';
  propertyName: string;
  queryOperator: QueryOperators;
}

export interface QueryPropertyFilter<T> extends QueryFilter {
  filterType: 'property';
  value: T;
}

export interface QueryArrayFilter<T> extends QueryFilter {
  filterType: 'array';
  value: T[];
}

export interface QueryObjectFilter<T>
  extends Omit<QueryFilter, 'queryOperator'> {
  filterType: 'object';
  value: T;
}

export type QueryFilters<T> =
  | QueryPropertyFilter<T>
  | QueryArrayFilter<T>
  | QueryObjectFilter<T>;
