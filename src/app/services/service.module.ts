import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

import { AuthGuard } from './guard/auth.guard';
import { NoAuthGuard } from './guard/noguard.guard';
import { HttpService } from './http.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { HttpConfigInterceptor } from './interceptors/http.interceptor';

import { AlertService } from './alert.service';
import { MediaBreakpointService } from './media-breakpoint.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [CommonModule],
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders<ServiceModule> {
    return {
      ngModule: ServiceModule,
      providers: [
        HttpService,
        AlertService,
        AuthService,
        Ng2IzitoastService,
        CookieService,
        AuthGuard,
        NoAuthGuard,
        MediaBreakpointService,
        NbDialogService,
        NbWindowService,
        // SseService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpConfigInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
      ],
    };
  }
}
