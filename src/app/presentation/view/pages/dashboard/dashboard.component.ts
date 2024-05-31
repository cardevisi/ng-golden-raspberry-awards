import { Component } from '@angular/core';
import { IMoviesController } from '../../../../domain/controllers/imovies-controller';
import { Subject, finalize, debounceTime } from 'rxjs';
import quickSortTopWinners from './utils/quick-sort-top-winners';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  TOP_WINNERS = 3;
  DEBOUNCE_TIME = 300;

  searchValue: string = '';

  isLoadingMultipleWinnersByYear: boolean = false;
  isStudiosWithWinCount: boolean = false;
  isMoviesByYear: boolean = false;
  isMaxAndMinWinnersIntervalForProducers: boolean = false;

  displayedColumnsForMultipleWinnersByYear: string[] = ['year', 'winnerCount'];
  dataSourceMultipleWinnersByYear: any;
  displayedColumnsStudiosWithWinCount: string[] = ['name', 'winCount'];
  dataSourceStudiosWithWinCount: any;
  displayedColumnsForMoviesByYear: string[] = ['id', 'year', 'title'];
  dataSourceMoviesByYear: any;
  displayedColumnsForMaxMinWinIntervalForProducers: string[] = [
    'producer',
    'interval',
    'previousYear',
    'followingYear',
  ];
  dataSourceMaxAndMinWinnersIntervalForProducers: any = {
    max: [],
    min: [],
  };

  debouncerWinnersByYear: Subject<string> = new Subject<string>();

  constructor(readonly moviesController: IMoviesController) {
    this.debouncerWinnersByYear
      .pipe(debounceTime(this.DEBOUNCE_TIME))
      .subscribe((value) => {
        return this.getMoviesByYear(true, value);
      });
  }

  ngOnInit(): void {
    this.getMultipleWinnersByYear();
    this.getStudiosWithWinCount(this.TOP_WINNERS);
    this.getMaxAndMinWinnersIntervalForProducers();
  }

  onSearchChange(value: string) {
    this.searchValue = value;
    this.debouncerWinnersByYear.next(this.searchValue);
  }

  getMultipleWinnersByYear() {
    this.isLoadingMultipleWinnersByYear = true;

    this.moviesController
      .getMultipleWinnersByYear()
      .pipe(finalize(() => (this.isLoadingMultipleWinnersByYear = false)))
      .subscribe((winnersByYear) => {
        return (this.dataSourceMultipleWinnersByYear = winnersByYear.years);
      });
  }

  getStudiosWithWinCount(topWinners: number = 3) {
    this.isStudiosWithWinCount = true;

    this.moviesController
      .getStudiosWithWinCount()
      .pipe(finalize(() => (this.isStudiosWithWinCount = false)))
      .subscribe((studiosWithWinCount) => {
        const sortedStudios = studiosWithWinCount.studios;
        const topStudios = sortedStudios.slice(0, topWinners);
        return (this.dataSourceStudiosWithWinCount =
          quickSortTopWinners(topStudios));
      });
  }

  getMoviesByYear(winner: boolean, year: string) {
    this.isMoviesByYear = true;

    this.moviesController
      .getMoviesByYear(winner, year)
      .pipe(finalize(() => (this.isMoviesByYear = false)))
      .subscribe((movies) => (this.dataSourceMoviesByYear = movies));
  }

  getMaxAndMinWinnersIntervalForProducers() {
    this.isMaxAndMinWinnersIntervalForProducers = true;

    this.moviesController
      .getMaxAndMinWinnersIntervalForProducers()
      .pipe(
        finalize(() => (this.isMaxAndMinWinnersIntervalForProducers = false))
      )
      .subscribe((maxAndMinWinnersIntervalForProducers) => {
        return (this.dataSourceMaxAndMinWinnersIntervalForProducers =
          maxAndMinWinnersIntervalForProducers);
      });
  }
}
