import { TestBed } from '@angular/core/testing';
import { MovieControllerService } from './movies-controller.service';
import { WinnerStatus } from '../../view/shared/constants/winner-status';
import { IMoviesUseCase } from '../../../domain/interfaces/usecases/movies/movies-use-case';
import { Observable } from 'rxjs';
import { GetMovieProps } from '../../view/shared/types/get-movie-props.types';

describe('MovieControllerService', () => {
  let moviesController: MovieControllerService;
  let moviesUseCaseSpy: jasmine.SpyObj<IMoviesUseCase>;

  beforeEach(() => {
    moviesUseCaseSpy = jasmine.createSpyObj('IMoviesUseCase', {
      getMovies: new Observable(),
      getMultipleWinnersByYear: new Observable(),
      getStudiosWithWinCount: new Observable(),
      getMaxAndMinWinnersIntervalForProducers: new Observable(),
      getMoviesByYear: new Observable(),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: IMoviesUseCase, useValue: moviesUseCaseSpy }],
    });

    moviesController = TestBed.get(MovieControllerService);
  });

  it('should be created', () => {
    expect(moviesController).toBeTruthy();
  });

  it('should call the method getMovies', () => {
    const mockParams: GetMovieProps = {
      page: 0,
      size: 99,
      year: '1988',
      winnerStatus: WinnerStatus.NO,
    };

    moviesController.getMovies(mockParams);

    expect(moviesUseCaseSpy.getMovies).toHaveBeenCalled();
    expect(moviesUseCaseSpy.getMovies).toHaveBeenCalledWith(mockParams);
  });

  it('should call the method getMultipleWinnersByYear', () => {
    moviesController.getMultipleWinnersByYear();
    expect(moviesUseCaseSpy.getMultipleWinnersByYear).toHaveBeenCalled();
  });

  it('should call the method getStudiosWithWinCount', () => {
    moviesController.getStudiosWithWinCount();
    expect(moviesUseCaseSpy.getStudiosWithWinCount).toHaveBeenCalled();
  });

  it('should call the method getMaxAndMinWinnersIntervalForProducers', () => {
    moviesController.getMaxAndMinWinnersIntervalForProducers();
    expect(
      moviesUseCaseSpy.getMaxAndMinWinnersIntervalForProducers
    ).toHaveBeenCalled();
  });

  it('should call the method getMoviesByYear', () => {
    moviesController.getMoviesByYear(true, '1988');
    expect(moviesUseCaseSpy.getMoviesByYear).toHaveBeenCalled();
    expect(moviesUseCaseSpy.getMoviesByYear).toHaveBeenCalledWith(true, '1988');
  });
});
