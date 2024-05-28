import { Observable } from 'rxjs';
import { GetMovieProps } from './GoldenRaspberryAwardsGateway.types';

export abstract class IMoviesRepository {
  abstract getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Observable<any>;
  abstract getMultipleWinnersByYear(): Observable<any>;
  abstract getStudiosWithWinCount(): Observable<any>;
  abstract getMaxAndMinWinnersIntervalForProducers(): Observable<any>;
  abstract getMoviesByYear(winner: boolean, year: string): Observable<any>;
}
