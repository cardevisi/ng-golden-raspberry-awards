import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteService } from '../routes.service';
import { MoviesComponent } from './movies.component';

const routes = [
  RouteService.withShell([
    {
      path: '',
      redirectTo: '/movies',
      pathMatch: 'full',
    },
    {
      path: 'movies',
      component: MoviesComponent,
      data: { title: 'Movies' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
