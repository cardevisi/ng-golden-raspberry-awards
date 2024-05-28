import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { MoviesUseCase } from './movies-use-case';
import { IMoviesRepository } from '../../interfaces/imovies-repository';

describe('MoviesUseCase', () => {
  let moviesUseCase: MoviesUseCase;
  let moviesRepositorySpy: jasmine.SpyObj<IMoviesRepository>;

  beforeEach(() => {
    moviesRepositorySpy = jasmine.createSpyObj('IMoviesRepository', {
      getMovies: new Observable<any>(),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: IMoviesRepository, useValue: moviesRepositorySpy },
      ],
    }).compileComponents();

    moviesUseCase = TestBed.inject(MoviesUseCase as any);
    console.log(moviesUseCase);
  });

  it('should be created', () => {
    expect(moviesUseCase).toBeTruthy();
  });
});
