import { Observable } from 'rxjs';
import { GetMovieProps } from '../interfaces/GoldenRaspberryAwardsGateway.types';

export abstract class IMoviesController {
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
