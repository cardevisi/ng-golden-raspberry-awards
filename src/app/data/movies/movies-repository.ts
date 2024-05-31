import { HttpClient } from '@angular/common/http';
import { IMoviesRepository } from '../../domain/interfaces/repository/imovies-repository';
import { Observable, map } from 'rxjs';
import { GetMovieProps } from '../../domain/entities/get-movie-props.types';
import { convertWinnerStatusInBoolean } from './utils/convertWinnerStatusInBoolean';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { StudiosWithWinCountEntity } from '../../domain/entities/studios-with-win-count-entity';
import { MoviesMultiplesWinnersByYearEntity } from '../../domain/entities/movies-multiples-winners-by-year-entity';
import { MaxMinWinIntervalForProducersEntity } from '../../domain/entities/max-min-win-interval-for-producers-entity';
import { MoviesByYearEntity } from '../../domain/entities/movies-by-year-entity';
import { MoviesByPageEntity } from '../../domain/entities/movies-by-page-entity';

@Injectable({
  providedIn: 'root',
})
export class MoviesRepository implements IMoviesRepository {
  constructor(private http: HttpClient) {}
  getMultipleWinnersByYear(): Observable<MoviesMultiplesWinnersByYearEntity> {
    const url = `${environment.serverUrl}?projection=years-with-multiple-winners`;
    return this.http.get<MoviesMultiplesWinnersByYearEntity>(url).pipe(
      map((winners) => {
        return winners;
      })
    );
  }
  getStudiosWithWinCount(): Observable<StudiosWithWinCountEntity> {
    const url = `${environment.serverUrl}?projection=studios-with-win-count`;
    return this.http.get<StudiosWithWinCountEntity>(url).pipe(
      map((studiosWithWinCount) => {
        return studiosWithWinCount;
      })
    );
  }
  getMaxAndMinWinnersIntervalForProducers(): Observable<MaxMinWinIntervalForProducersEntity> {
    const url = `${environment.serverUrl}?projection=max-min-win-interval-for-producers`;
    return this.http.get<MaxMinWinIntervalForProducersEntity>(url).pipe(
      map((maxAndMinWinnersIntervalForProducers) => {
        return maxAndMinWinnersIntervalForProducers;
      })
    );
  }
  getMoviesByYear(
    winner: boolean,
    year: string
  ): Observable<MoviesByYearEntity> {
    const url = `${environment.serverUrl}?winner=${winner}&year=${year}`;
    return this.http.get<MoviesByYearEntity>(url).pipe(
      map((moviesByYear) => {
        return moviesByYear;
      })
    );
  }

  getMovies({
    page,
    size,
    year,
    winnerStatus,
  }: GetMovieProps): Observable<MoviesByPageEntity> {
    const winnerStatusAsBooleanText =
      convertWinnerStatusInBoolean(winnerStatus);

    const url = `${environment.serverUrl}?page=${page}&size=${size}&winner=${winnerStatusAsBooleanText}&year=${year}`;

    return this.http.get<MoviesByPageEntity>(url).pipe(
      map((moviesByPage) => {
        return moviesByPage;
      })
    );
  }
}
