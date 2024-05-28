import { Component } from '@angular/core';
import { MoviesData } from '../movies/movies-data.interface';
import { DATA_TABLE } from '../../../../data/movies/movies-data-table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  displayedColumns: string[] = ['id', 'year', 'title', 'winner'];
  dataSource: MoviesData[] = DATA_TABLE;
}
