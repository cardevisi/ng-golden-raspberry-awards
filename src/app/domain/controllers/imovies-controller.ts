import { Observable } from 'rxjs';
import { MoviesMultiplesWinnersByYearEntity } from '../entities/movies-multiples-winners-by-year-entity';
import { StudiosWithWinCountEntity } from '../entities/studios-with-win-count-entity';
import { MaxMinWinIntervalForProducersEntity } from '../entities/max-min-win-interval-for-producers-entity';
import { MoviesByYearEntity } from '../entities/movies-by-year-entity';
import { MoviesByPageEntity } from '../entities/movies-by-page-entity';
import { GetMovieProps } from '../../presentation/view/shared/types/get-movie-props.types';

export abstract class IMoviesController {
  abstract getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Observable<MoviesByPageEntity>;
  abstract getMultipleWinnersByYear(): Observable<MoviesMultiplesWinnersByYearEntity>;
  abstract getStudiosWithWinCount(): Observable<StudiosWithWinCountEntity>;
  abstract getMaxAndMinWinnersIntervalForProducers(): Observable<MaxMinWinIntervalForProducersEntity>;
  abstract getMoviesByYear(
    winner: boolean,
    year: string
  ): Observable<MoviesByYearEntity>;
}
