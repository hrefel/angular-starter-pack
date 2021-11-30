import {
  HttpEvent, HttpHandler, HttpInterceptor,
  HttpParams, HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ng2IzitoastService } from "ng2-izitoast";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";



@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  URLNotToUse: Array<string>;

  constructor(
    private cookie: CookieService,
    private toastr: Ng2IzitoastService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.cookie.get("token");

    if (token ) {
      request = request.clone({

        headers: request.headers.set("Authorization", token)
      });

      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          
          if (event instanceof HttpResponse) {
            
            if (event.status === 201) {
              let message = event.body.message
                ? event.body.message
                : "Data Berhasil Disimpan";
              this.toastr.success({
                title: message,
                position: "topRight",
              });
            }
          }
          
          return event;
        })
      );
    }

    return next.handle(request);
  }
}
