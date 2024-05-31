import { Observable } from 'rxjs';
import { IMoviesUseCase } from '../../interfaces/usecases/movies/movies-use-case';
import { IMoviesRepository } from '../../interfaces/repository/imovies-repository';
import { Injectable } from '@angular/core';
import { MoviesMultiplesWinnersByYearEntity } from '../../entities/movies-multiples-winners-by-year-entity';
import { StudiosWithWinCountEntity } from '../../entities/studios-with-win-count-entity';
import { MaxMinWinIntervalForProducersEntity } from '../../entities/max-min-win-interval-for-producers-entity';
import { MoviesByYearEntity } from '../../entities/movies-by-year-entity';
import { MoviesByPageEntity } from '../../entities/movies-by-page-entity';
import { GetMovieProps } from '../../../presentation/view/shared/types/get-movie-props.types';

@Injectable({
  providedIn: 'root',
})
export class MoviesUseCase implements IMoviesUseCase {
  constructor(private movieRepository: IMoviesRepository) {}
  getMultipleWinnersByYear(): Observable<MoviesMultiplesWinnersByYearEntity> {
    return this.movieRepository.getMultipleWinnersByYear();
  }
  getStudiosWithWinCount(): Observable<StudiosWithWinCountEntity> {
    return this.movieRepository.getStudiosWithWinCount();
  }
  getMaxAndMinWinnersIntervalForProducers(): Observable<MaxMinWinIntervalForProducersEntity> {
    return this.movieRepository.getMaxAndMinWinnersIntervalForProducers();
  }
  getMoviesByYear(
    winner: boolean,
    year: string
  ): Observable<MoviesByYearEntity> {
    return this.movieRepository.getMoviesByYear(winner, year);
  }
  getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Observable<MoviesByPageEntity> {
    return this.movieRepository.getMovies({ page, size, year, winnerStatus });
  }
}
