import { HttpClient } from '@angular/common/http';
import { IMoviesRepository } from '../../domain/interfaces/imovies-repository';
import { Observable, map } from 'rxjs';
import { GetMovieProps } from '../../domain/interfaces/GoldenRaspberryAwardsGateway.types';
import { convertWinnerStatusInBoolean } from '../../domain/interfaces/convertWinnerStatusInBoolean';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesRepository implements IMoviesRepository {
  constructor(private http: HttpClient) {}
  getMultipleWinnersByYear(): Observable<any> {
    const url = `${environment.serverUrl}?projection=years-with-multiple-winners`;
    return this.http.get(url).pipe(
      map((winners) => {
        return winners;
      })
    );
  }
  getStudiosWithWinCount(): Observable<any> {
    const url = `${environment.serverUrl}?projection=studios-with-win-count`;
    return this.http.get(url).pipe(
      map((studiosWithWinCount) => {
        return studiosWithWinCount;
      })
    );
  }
  getMaxAndMinWinnersIntervalForProducers(): Observable<any> {
    const url = `${environment.serverUrl}?projection=max-min-win-interval-for-producers`;
    return this.http.get(url).pipe(
      map((maxAndMinWinnersIntervalForProducers) => {
        return maxAndMinWinnersIntervalForProducers;
      })
    );
  }
  getMoviesByYear(winner: boolean, year: string): Observable<any> {
    const url = `${environment.serverUrl}?winner=${winner}&year=${year}`;
    return this.http.get(url).pipe(
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
  }: GetMovieProps): Observable<any> {
    const winnerStatusAsBooleanText =
      convertWinnerStatusInBoolean(winnerStatus);

    const url = `${environment.serverUrl}?page=${page}&size=${size}&winner=${winnerStatusAsBooleanText}&year=${year}`;

    return this.http.get(url).pipe(
      map((item) => {
        return item;
      })
    );
  }
}
