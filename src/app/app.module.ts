import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbWindowModule,
  NbToastrModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './core/core.module';
import { ServiceModule } from './services/service.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { registerLocaleData } from '@angular/common';
import { AuthModule } from './modules/auth/auth.module';
// import { BankSoalModule } from './modules/bank-soal/bank-soal.module';
// import { WebRekrutmenModule } from './modules/web-rekrutmen/web-rekrutmen.module';
// import { CentralAppsModule } from './modules/central-apps/central-apps.module';
// import id from '@angular/common/locales/id';

// registerLocaleData(id);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,

    // #nebular
    NgSelectModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbThemeModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),

    ServiceModule.forRoot(),

    // MODULES
    AuthModule,
    // BankSoalModule,
    // WebRekrutmenModule,
    // CentralAppsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
