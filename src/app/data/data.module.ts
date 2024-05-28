import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesRepository } from './movies/movies-repository';
import { IMoviesRepository } from '../domain/interfaces/imovies-repository';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: IMoviesRepository,
      useClass: MoviesRepository,
    },
  ],
})
export class DataModule {}
