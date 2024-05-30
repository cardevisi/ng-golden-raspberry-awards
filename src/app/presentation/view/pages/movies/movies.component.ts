import { Component } from '@angular/core';
import { MoviesData } from './movies-data.interface';
import { IMoviesController } from '../../../../domain/controllers/imovies-controller';
import { WinnerStatus } from '../../../../domain/interfaces/winner-status';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  constructor(private moviesController: IMoviesController) {}

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
    this.getMovies({
      page: this.currentPage - 1,
      year: '',
      winnerStatus: winner as WinnerStatus,
    });
  }

  onSearchChange(year: string) {
    this.yearFilter = year;
    this.getMovies({
      page: this.currentPage - 1,
      year,
    });
  }

  getMovies({
    page = 0,
    size = 10,
    year = '',
    winnerStatus = WinnerStatus.YES,
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
        this.dataSource = movies.content;
      });
  }
}
