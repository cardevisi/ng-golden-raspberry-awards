import { Component } from '@angular/core';
// import { DATA_TABLE } from '../../../../data/movies/movies-data-table';
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

  isLoading: boolean = false;
  displayedColumns: string[] = ['id', 'year', 'title', 'winner'];
  dataSource: MoviesData[] = [];

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.isLoading = true;

    this.moviesController
      .getMovies({
        page: 0,
        size: 1000,
        year: '',
        winnerStatus: WinnerStatus.YES,
      })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((movies: any) => {
        this.dataSource = movies.content;
      });
  }
}
