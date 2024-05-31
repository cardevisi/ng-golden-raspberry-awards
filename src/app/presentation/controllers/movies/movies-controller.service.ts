import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoviesController } from '../../../domain/controllers/imovies-controller';
import { GetMovieProps } from '../../../domain/entities/get-movie-props.types';
import { IMoviesUseCase } from '../../../domain/interfaces/usecases/movies/movies-use-case';

@Injectable({
  providedIn: 'root',
})
export class MovieControllerService implements IMoviesController {
  constructor(private movieUseCase: IMoviesUseCase) {}
  getMultipleWinnersByYear(): Observable<any> {
    return this.movieUseCase.getMultipleWinnersByYear();
  }
  getStudiosWithWinCount(): Observable<any> {
    return this.movieUseCase.getStudiosWithWinCount();
  }
  getMaxAndMinWinnersIntervalForProducers(): Observable<any> {
    return this.movieUseCase.getMaxAndMinWinnersIntervalForProducers();
  }
  getMoviesByYear(winner: boolean, year: string): Observable<any> {
    return this.movieUseCase.getMoviesByYear(winner, year);
  }
  getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Observable<any> {
    return this.movieUseCase.getMovies({
      page,
      size,
      year,
      winnerStatus,
    });
  }
}
