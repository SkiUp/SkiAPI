import { ApiProperty } from '@nestjs/swagger';
import { QueryOperators } from '../enums';

export class QueryFilter {
  @ApiProperty()
  public filterType: 'array' | 'property' | 'object';

  @ApiProperty()
  public propertyName: string;
}

export class QueryPropertyFilter<T> extends QueryFilter {
  @ApiProperty()
  public filterType: 'property';

  @ApiProperty()
  public value: T;

  @ApiProperty()
  public queryOperator: QueryOperators;
}

export class QueryArrayFilter<T> extends QueryFilter {
  @ApiProperty()
  public filterType: 'array';

  @ApiProperty()
  public value: T[];

  @ApiProperty()
  public queryOperator: QueryOperators;
}

export abstract class QueryObjectFilter<T> {
  @ApiProperty()
  public filterType: 'object';
  @ApiProperty()
  public value: T;
}

export type QueryFilters<T> =
  | QueryPropertyFilter<T>
  | QueryArrayFilter<T>
  | QueryObjectFilter<T>;
