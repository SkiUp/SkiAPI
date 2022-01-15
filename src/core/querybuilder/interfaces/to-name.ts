import { QueryOperators } from "../enums/query-operator.enum";

export interface ToNameArray<T>{

    search: T[];
    queryOperator: QueryOperators;
}