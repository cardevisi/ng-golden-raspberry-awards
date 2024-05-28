import { DomainEntity } from './base/domain-entity';
export class MoviesEntity extends DomainEntity {
  title: string | undefined;
  year: string | undefined;
  winner: string | undefined;
}
