import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewModule } from './view/view.module';
import { IMoviesController } from '../domain/controllers/imovies-controller';
import { MovieControllerService } from './controllers/movies/movies-controller.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, ViewModule],
  exports: [ViewModule],
  providers: [
    {
      provide: IMoviesController,
      useClass: MovieControllerService,
    },
  ],
})
export class PresentationModule {}
