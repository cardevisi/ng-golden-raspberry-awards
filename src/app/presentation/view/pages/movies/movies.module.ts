import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MoviesRoutingModule, MatTableModule],
})
export class MoviesModule {}
