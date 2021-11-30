import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { UIModule } from 'src/app/shared';
import { SharedModule } from 'src/app/shared/shared.module';
import * as page from '..';

@NgModule({
  declarations: [page.LoginComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: page.LoginComponent,
      },
    ]),
    ...UIModule,
    ThemeModule,
    SharedModule,
  ],

  bootstrap: [page.LoginComponent],
})
export class LoginModule {}

@NgModule({
  declarations: [page.LupaPasswordComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: page.LupaPasswordComponent,
      },
    ]),
    ...UIModule,
    ThemeModule,
    SharedModule,
  ],

  bootstrap: [page.LupaPasswordComponent],
})
export class LupaPasswordModule {}