import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesUseCase } from './usecases/movies/movies-use-case';
import { IMoviesUseCase } from './interfaces/usecases/movies/movies-use-case';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: IMoviesUseCase,
      useClass: MoviesUseCase,
    },
  ],
})
export class DomainModule {}
