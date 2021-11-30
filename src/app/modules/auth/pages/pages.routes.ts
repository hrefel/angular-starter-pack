import { Routes } from '@angular/router';
import { NoAuthGuard } from 'src/app/services/guard/noguard.guard';

export const AuthRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages.module').then((m) => m.LoginModule),
    canActivate: [NoAuthGuard],
    data: {
      role: '*',
      title: 'Login',
      tag: 'login',
      isShowHeader: true,
    },
  },
  {
    path: 'lupa-password',
    loadChildren: () =>
      import('./pages.module').then((m) => m.LupaPasswordModule),
    canActivate: [NoAuthGuard],
    data: {
      role: '*',
      title: 'Lupa Password',
      tag: 'lupa password',
      isShowHeader: true,
    },
  },
];
