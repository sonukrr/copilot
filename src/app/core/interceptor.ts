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
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // if (currentUser && currentUser.token) {
    //   request = request.clone({
    //     setHeaders: {
    //       'Content-Type': 'application/json',
    //       Authorization: `JWT ${currentUser.token}`
    //     }
    //   });
    // }


    return next.handle(request).pipe(tap((res: any) => {
      if (res.body && res.body.code == 401) {
        localStorage.clear(); // clearing localstorage takes care of redirecting to login page for admin
        window.location.reload();
      }

      return;

    },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          // if (err.status !== 401) {
          //  return;
          // }
          // this.router.navigate(['login']);
          if (err.status === 401) {
            this.alertService.toast('error', 'Unauthorized user. Please login again!');

            setTimeout(() => {
              localStorage.clear(); // clearing localstorage takes care of redirecting to login page for admin
              window.location.reload();
            }, 2000);

          } else {
            // let message = err.error.message.length > 0 ? err.error.message : 'Something is wrong. Please try again!';
            console.log("something went wrong",err)
            let message2 = err.error.message
            this.alertService.toast('error', "something went wrong, please try again.");
            return;
          }

        }
      }));

  }
}
