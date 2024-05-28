import { Observable } from 'rxjs';
import { GetMovieProps } from '../../GoldenRaspberryAwardsGateway.types';

export abstract class IMoviesUseCase {
  abstract getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Observable<any>;
}
