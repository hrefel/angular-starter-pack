import {
  HttpEvent, HttpHandler,

  HttpInterceptor, HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from '../auth.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.authService.currentUserValue) {
      return next.handle(request);
    }
    let currentUser = this.authService.currentUserValue;
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          "X-AUTH-TOKEN": `${currentUser}`,
        },
      });
    }

    return next.handle(request);
  }
}
