import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { MoviesUseCase } from './movies-use-case';
import { IMoviesRepository } from '../../interfaces/repository/imovies-repository';
import { WinnerStatus } from '../../../presentation/view/shared/constants/winner-status';
import { MoviesMultiplesWinnersByYearEntity } from '../../entities/movies-multiples-winners-by-year-entity';
import { StudiosWithWinCountEntity } from '../../entities/studios-with-win-count-entity';
import { MoviesByYearEntity } from '../../entities/movies-by-year-entity';
import { MaxMinWinIntervalForProducersEntity } from '../../entities/max-min-win-interval-for-producers-entity';

describe('MoviesUseCase', () => {
  let moviesUseCase: MoviesUseCase;
  let moviesRepositorySpy: jasmine.SpyObj<IMoviesRepository>;

  beforeEach(() => {
    moviesRepositorySpy = jasmine.createSpyObj('IMoviesRepository', {
      getMovies: new Observable<MoviesByYearEntity>(),
      getMultipleWinnersByYear:
        new Observable<MoviesMultiplesWinnersByYearEntity>(),
      getStudiosWithWinCount: new Observable<StudiosWithWinCountEntity>(),
      getMoviesByYear: new Observable<MoviesByYearEntity>(),
      getMaxAndMinWinnersIntervalForProducers:
        new Observable<MaxMinWinIntervalForProducersEntity>(),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: IMoviesRepository, useValue: moviesRepositorySpy },
      ],
    }).compileComponents();

    moviesUseCase = TestBed.inject(MoviesUseCase as any);
  });

  it('should be created', () => {
    expect(moviesUseCase).toBeTruthy();
  });

  it('should get movies', () => {
    moviesUseCase.getMovies({
      page: 1,
      size: 10,
      year: '',
      winnerStatus: WinnerStatus.NO,
    });
    expect(moviesRepositorySpy.getMovies).toHaveBeenCalled();
  });

  it('should get multiple winners by year', () => {
    moviesUseCase.getMultipleWinnersByYear();
    expect(moviesRepositorySpy.getMultipleWinnersByYear).toHaveBeenCalled();
  });

  it('should get studios with win count', () => {
    moviesUseCase.getStudiosWithWinCount();
    expect(moviesRepositorySpy.getStudiosWithWinCount).toHaveBeenCalled();
  });

  it('should get max and min winners interval for producers', () => {
    moviesUseCase.getMaxAndMinWinnersIntervalForProducers();
    expect(
      moviesRepositorySpy.getMaxAndMinWinnersIntervalForProducers
    ).toHaveBeenCalled();
  });

  it('should get movies by year', () => {
    moviesUseCase.getMoviesByYear(true, '2020');
    expect(moviesRepositorySpy.getMoviesByYear).toHaveBeenCalled();
  });
});
