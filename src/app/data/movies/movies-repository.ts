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
