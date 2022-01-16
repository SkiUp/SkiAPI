import { getConnection, SelectQueryBuilder } from 'typeorm';
import { QueryOperators } from './enums';
import { QueryFilters } from './interfaces/query-filters';
import { GlobalQueries } from './query-instances';

export async function QueryBuilder<TEntity>(query: GlobalQueries) {
  let builder: SelectQueryBuilder<TEntity> = getConnection()
    .createQueryBuilder()
    .select(query.className)
    .where('true');

  for (const [propName, propValue] of Object.entries(query)) {
    if (propName !== 'className') {
      builder = toSqlOperation(builder, propValue);
    }
  }
}

function toSqlOperation<T>(
  builder: SelectQueryBuilder<any>,
  query: QueryFilters<T>,
) {
  if (
    query.filterType === 'property' &&
    (query.queryOperator === QueryOperators.IN ||
      query.queryOperator === QueryOperators.NOT_IN)
  ) {
    // TODO throw error?
    return builder;
  }
  if (query.filterType === 'object') {
    // TODO IMPLEMENT
    throw new Error('Not implemented');
  }

  // TODO CHECK IF NUMERAL OPERATIONS ARE GIVEN NUMBERS AND NOT STRINGS
  const whereString = `${query.propertyName} ${query.queryOperator} ${wrapValue(
    query.propertyName,
    query.queryOperator,
  )}`;
  if (
    query.filterType === 'array' &&
    query.queryOperator !== QueryOperators.IN &&
    query.queryOperator !== QueryOperators.NOT_IN
  ) {
    for (const item of query.value) {
      builder = builder.andWhere(whereString, {
        [query.propertyName]: item,
      });
    }
  } else if (query.filterType === 'property') {
    return builder.andWhere(whereString, {
      [query.propertyName]: query.value,
    });
  }
}

function wrapValue(value: string, queryOperator: QueryOperators) {
  switch (queryOperator) {
    case QueryOperators.IN:
      return `(:${value})`;
    case QueryOperators.NOT_IN:
      return `(:${value})`;
    case QueryOperators.LIKE:
      return `'%:${value}%'`;
    case QueryOperators.NOT_LIKE:
      return `'%:${value}%'`;
    case QueryOperators.NOT_EQUAL:
      return `:${value}`;
    case QueryOperators.EQUAL:
      return `:${value}`;
    case QueryOperators.GREATER_THAN:
      return `:${value}`;
    case QueryOperators.GREATER_THAN_OR_EQUAL:
      return `:${value}`;
    case QueryOperators.LESS_THAN:
      return `:${value}`;
    case QueryOperators.LESS_THAN_OR_EQUAL:
      return `:${value}`;
    default:
      return `:${value}`;
  }
}
