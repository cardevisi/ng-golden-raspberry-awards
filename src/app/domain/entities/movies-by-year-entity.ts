import { DomainEntity } from './base/domain-entity';
export class MoviesByYearEntity extends DomainEntity {
  title: string | undefined;
  year: string | undefined;
  winner: string | undefined;
  producers: [] | undefined;
  studios: [] | undefined;
}
