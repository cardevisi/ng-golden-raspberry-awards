import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  /**
   * todo: handle auth errors
   * */

  throwError(err: HttpErrorResponse): any {
    if (err.status === 401) {
      console.error('Unauthorized');
    }
  }

  handleAuthError(err: HttpErrorResponse): Observable<any> {
    return this.throwError(err);
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => this.handleAuthError(error))
      );
  }
}
