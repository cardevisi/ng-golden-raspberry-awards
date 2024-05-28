import { Injectable } from '@angular/core';
import { Routes, Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  static withShell(routes: Routes): Route {
    return {
      path: '',
      children: routes,
    };
  }
}
