import { TestBed } from '@angular/core/testing';
import { MovieControllerService } from './movies-controller.service';
import { WinnerStatus } from '../../../domain/interfaces/winner-status';
import { IMoviesUseCase } from '../../../domain/interfaces/usecases/movies/movies-use-case';
import { Observable } from 'rxjs';
import { GetMovieProps } from '../../../domain/interfaces/GoldenRaspberryAwardsGateway.types';

describe('MovieControllerService', () => {
  let moviesController: MovieControllerService;
  let moviesUseCaseSpy: jasmine.SpyObj<IMoviesUseCase>;

  beforeEach(() => {
    moviesUseCaseSpy = jasmine.createSpyObj('IMoviesUseCase', {
      getMovies: new Observable(),
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
  });
});
