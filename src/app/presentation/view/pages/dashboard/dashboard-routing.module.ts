import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteService } from '../routes.service';
import { DashboardComponent } from './dashboard.component';

const routes = [
  RouteService.withShell([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full',
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: { title: 'Dashboard' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
