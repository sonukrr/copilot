import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/sweet-alert.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  // serverHostUrl: string ;

  constructor(private router: Router, private alertService: AlertService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap((res: any) => {
      return;

    },
      (err: any) => {
        // if (err instanceof HttpErrorResponse) {
         return false

        // }
      }));

  }
}
