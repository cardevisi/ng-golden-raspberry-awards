import { Observable } from 'rxjs';
import { GetMovieProps } from '../../interfaces/GoldenRaspberryAwardsGateway.types';
import { IMoviesUseCase } from '../../interfaces/usecases/movies/movies-use-case';
import { IMoviesRepository } from '../../interfaces/imovies-repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesUseCase implements IMoviesUseCase {
  constructor(private movieRepository: IMoviesRepository) {}
  getMultipleWinnersByYear(): Observable<any> {
    return this.movieRepository.getMultipleWinnersByYear();
  }
  getStudiosWithWinCount(): Observable<any> {
    return this.movieRepository.getStudiosWithWinCount();
  }
  getMaxAndMinWinnersIntervalForProducers(): Observable<any> {
    return this.movieRepository.getMaxAndMinWinnersIntervalForProducers();
  }
  getMoviesByYear(winner: boolean, year: string): Observable<any> {
    return this.movieRepository.getMoviesByYear(winner, year);
  }
  getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Observable<any> {
    return this.movieRepository.getMovies({ page, size, year, winnerStatus });
  }
}
