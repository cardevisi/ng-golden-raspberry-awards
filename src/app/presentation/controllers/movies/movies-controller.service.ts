import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoviesController } from '../../../domain/controllers/imovies-controller';
import { IMoviesUseCase } from '../../../domain/interfaces/usecases/movies/movies-use-case';
import { GetMovieProps } from '../../view/shared/types/get-movie-props.types';
import { MoviesByPageEntity } from '../../../domain/entities/movies-by-page-entity';
import { MoviesByYearEntity } from '../../../domain/entities/movies-by-year-entity';
import { MaxMinWinIntervalForProducersEntity } from '../../../domain/entities/max-min-win-interval-for-producers-entity';
import { StudiosWithWinCountEntity } from '../../../domain/entities/studios-with-win-count-entity';
import { MoviesMultiplesWinnersByYearEntity } from '../../../domain/entities/movies-multiples-winners-by-year-entity';

@Injectable({
  providedIn: 'root',
})
export class MovieControllerService implements IMoviesController {
  constructor(private movieUseCase: IMoviesUseCase) {}
  getMultipleWinnersByYear(): Observable<MoviesMultiplesWinnersByYearEntity> {
    return this.movieUseCase.getMultipleWinnersByYear();
  }
  getStudiosWithWinCount(): Observable<StudiosWithWinCountEntity> {
    return this.movieUseCase.getStudiosWithWinCount();
  }
  getMaxAndMinWinnersIntervalForProducers(): Observable<MaxMinWinIntervalForProducersEntity> {
    return this.movieUseCase.getMaxAndMinWinnersIntervalForProducers();
  }
  getMoviesByYear(
    winner: boolean,
    year: string
  ): Observable<MoviesByYearEntity> {
    return this.movieUseCase.getMoviesByYear(winner, year);
  }
  getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Observable<MoviesByPageEntity> {
    return this.movieUseCase.getMovies({
      page,
      size,
      year,
      winnerStatus,
    });
  }
}
