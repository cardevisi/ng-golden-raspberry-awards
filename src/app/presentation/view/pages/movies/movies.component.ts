import { Component } from '@angular/core';
import { MoviesData } from './movies-data.interface';
import { IMoviesController } from '../../../../domain/controllers/imovies-controller';
import { WinnerStatus } from '../../shared/constants/winner-status';
import { finalize, debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  DEBOUNCE_TIME = 1000;
  debouncerWinner: Subject<string> = new Subject<string>();
  debouncerYear: Subject<string> = new Subject<string>();

  yearFilter: string = '';
  winnerFilter: string = '';
  winnerOptions = [
    { value: 'YES', viewValue: 'Yes' },
    { value: 'NO', viewValue: 'No' },
  ];

  currentPage: number = 1;
  totalPages: number = 1;

  isLoading: boolean = false;
  displayedColumns: string[] = ['id', 'year', 'title', 'winner'];
  dataSource: MoviesData[] = [];

  constructor(private moviesController: IMoviesController) {
    this.debouncerWinner
      .pipe(debounceTime(this.DEBOUNCE_TIME))
      .subscribe((value) => {
        return this.getMovies({
          page: 0,
          year: this.yearFilter as string,
          winnerStatus: value as WinnerStatus,
        });
      });

    this.debouncerYear
      .pipe(debounceTime(this.DEBOUNCE_TIME))
      .subscribe((value) => {
        return this.getMovies({
          page: 0,
          year: value as string,
          winnerStatus: this.winnerFilter as WinnerStatus,
        });
      });
  }

  ngOnInit(): void {
    this.getMovies({
      page: this.currentPage - 1,
      year: '',
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getMovies({
      page: this.currentPage - 1,
      year: '',
    });
  }

  onChangeWinnerFilter(winner: string) {
    this.winnerFilter = winner;
    this.debouncerWinner.next(winner);
  }

  onSearchChange(year: string) {
    this.yearFilter = year;
    this.debouncerYear.next(year);
  }

  formatWinnerValue(winner: string) {
    return winner.toString() === 'true' ? 'Yes' : 'No';
  }

  getMovies({
    page = 0,
    size = 10,
    year = '',
    winnerStatus = WinnerStatus.EMPTY,
  }: {
    page?: number;
    size?: number;
    year?: string;
    winnerStatus?: WinnerStatus;
  }) {
    this.isLoading = true;

    this.moviesController
      .getMovies({
        page,
        size,
        year,
        winnerStatus,
      })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((movies: any) => {
        this.totalPages = movies.totalPages;
        this.dataSource = movies.content.map((movie: any) => ({
          id: movie.id,
          year: movie.year,
          title: movie.title,
          winner: this.formatWinnerValue(movie.winner.toString()),
        }));
      });
  }
}
