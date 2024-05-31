import { Observable } from 'rxjs';
import { MoviesByYearEntity } from '../../entities/movies-by-year-entity';
import { MoviesMultiplesWinnersByYearEntity } from '../../entities/movies-multiples-winners-by-year-entity';
import { StudiosWithWinCountEntity } from '../../entities/studios-with-win-count-entity';
import { MaxMinWinIntervalForProducersEntity } from '../../entities/max-min-win-interval-for-producers-entity';
import { GetMovieProps } from '../../../presentation/view/shared/types/get-movie-props.types';
import { MoviesByPageEntity } from '../../entities/movies-by-page-entity';

export abstract class IMoviesRepository {
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
