import { DomainEntity } from './domain-entity';

describe('DomainEntity', () => {
  it('should create an instance', () => {
    expect(new DomainEntity()).toBeTruthy();
  });

  it('should create an instance with id', () => {
    const entity = new DomainEntity();
    entity.id = 1;
    expect(entity.id).toBe(1);
  });
});
