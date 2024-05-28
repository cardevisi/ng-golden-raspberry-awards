import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoviesController } from '../../../domain/controllers/imovies-controller';
import { GetMovieProps } from '../../../domain/interfaces/GoldenRaspberryAwardsGateway.types';
import { IMoviesUseCase } from '../../../domain/interfaces/usecases/movies/movies-use-case';

@Injectable({
  providedIn: 'root',
})
export class MovieControllerService implements IMoviesController {
  constructor(private movieUseCase: IMoviesUseCase) {}
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
