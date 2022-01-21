import { getRepository, SelectQueryBuilder } from 'typeorm';

import { QueryOperators } from './enums';
import { GenericQuery } from './interfaces/generic-query';
import { QueryFilters } from './interfaces/query-filters';

export function QueryBuilder<TEntity>(query: GenericQuery): Promise<TEntity[]> {
  let builder = getRepository<TEntity>(query.className)
    .createQueryBuilder(query.className)
    .where('1 < 5');

  console.log(builder);

  if (query.filters) {
    for (const filter of query.filters) {
      let isValidValue = true;
      if (filter.filterType === 'property') {
        isValidValue = !!filter.value;
      } else if (filter.filterType === 'array') {
        isValidValue =
          filter?.value?.filter((item: unknown) => !!item).length > 0;
      } else if (filter.filterType === 'object') {
        isValidValue = filter.value && Object.keys(filter.value).length > 0;
      }

      if (!isValidValue) {
        // throw new Error('Query property is not defined');
        console.error('Query property is not defined');
      } else {
        builder = toSqlOperation(builder, filter);
      }
    }
  }
  console.log(builder.getQueryAndParameters());
  return builder.getMany();
}

function toSqlOperation<T>(
  builder: SelectQueryBuilder<any>,
  query: QueryFilters<T>,
) {
  console.log(query);
  if (
    query.filterType === 'property' &&
    (query.queryOperator === QueryOperators.IN ||
      query.queryOperator === QueryOperators.NOT_IN)
  ) {
    // TODO throw error?
    console.log(47);
    return builder;
  }
  if (query.filterType === 'object') {
    // TODO IMPLEMENT
    throw new Error('Not implemented');
  }

  // TODO CHECK IF NUMERAL OPERATIONS ARE GIVEN NUMBERS AND NOT STRINGS
  const whereString = `${query.propertyName} ${query.queryOperator} :${query.propertyName}`;
  if (query.filterType === 'array') {
    if (
      !(
        query.queryOperator === QueryOperators.IN ||
        query.queryOperator === QueryOperators.NOT_IN
      )
    ) {
      for (const item of query.value) {
        builder = builder.andWhere(whereString, {
          [query.propertyName]: wrapValue(item, query.queryOperator),
        });
      }
    }else{
      builder = builder.where()
    }
    console.log(68);
    return builder;
  } else {
    console.log(71);
    return builder.andWhere(whereString, {
      [query.propertyName]: wrapValue(query.value, query.queryOperator),
    });
  }
}

function wrapValue(value: unknown, queryOperator: QueryOperators) {
  switch (queryOperator) {
    case QueryOperators.IN:
    case QueryOperators.NOT_IN:
      return `('${value}')`;
    case QueryOperators.LIKE:
    case QueryOperators.NOT_LIKE:
      return `%${value}%`;
    case QueryOperators.NOT_EQUAL:
    case QueryOperators.EQUAL:
    case QueryOperators.GREATER_THAN:
    case QueryOperators.GREATER_THAN_OR_EQUAL:
    case QueryOperators.LESS_THAN:
    case QueryOperators.LESS_THAN_OR_EQUAL:
    default:
      return value;
  }
}
