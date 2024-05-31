import { MoviesByYearEntity } from './movies-by-year-entity';

describe('MoviesEntity', () => {
  it('should create an instance', () => {
    expect(new MoviesByYearEntity()).toBeTruthy();
  });

  it('should create an instance with id', () => {
    const entity = new MoviesByYearEntity();
    entity.id = 1;
    expect(entity.id).toBe(1);
  });

  it('should create an instance with title', () => {
    const entity = new MoviesByYearEntity();
    entity.title = 'title';
    expect(entity.title).toBe('title');
  });

  it('should create an instance with year', () => {
    const entity = new MoviesByYearEntity();
    entity.year = '2020';
    expect(entity.year).toBe('2020');
  });

  it('should create an instance with winner', () => {
    const entity = new MoviesByYearEntity();
    entity.winner = 'true';
    expect(entity.winner).toBe('true');
  });
});
