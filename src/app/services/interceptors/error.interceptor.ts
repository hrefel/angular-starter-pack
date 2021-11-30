import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  header = new HttpHeaders();
  constructor(
    private cookie: CookieService,
    private toastr: Ng2IzitoastService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        let message: any = 'Koneksi Server Terputus';
        let title: any = 'Error';

        if (err.status === 401) {
          message = 'Unauthorized';
        }

        this.toastr.warning({
          title: err.status,
          message: message,
          position: 'topCenter',
        });

        return throwError(err);
      })
    );
  }
}
  