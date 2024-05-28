import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MoviesModule } from './movies/movies.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MoviesModule, DashboardModule, PagesRoutingModule],
  exports: [PagesRoutingModule],
})
export class PagesModule {}
