import { DomainEntity } from './base/domain-entity';

export class MoviesByPageEntity {
  content: Movies[] = [];
  totalPages: number | undefined;
  totalElements: number | undefined;
  last: boolean = false;
  first: boolean = false;
  numberOfElements: number | undefined;
  size: number | undefined;
  number: number | undefined;
  empty: boolean = false;
}

export class Movies extends DomainEntity {
  title: string | undefined;
  year: number | undefined;
  studios: [] = [];
  producers: [] = [];
  winner: boolean = false;
}
