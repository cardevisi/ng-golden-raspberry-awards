import { Observable } from 'rxjs';
import { GetMovieProps } from './GoldenRaspberryAwardsGateway.types';

export abstract class IMoviesRepository {
  abstract getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Observable<any>;
  // abstract getMultipleWinnersByYear(): Observable<any>;
  // abstract getStudiosWithWinCount(year: number): Observable<any>;
  // abstract getMaxMinWinIntervalForProducers(): Observable<any>;
  // abstract getMoviesByYear(winner: boolean, year: string): Observable<any>;
}
