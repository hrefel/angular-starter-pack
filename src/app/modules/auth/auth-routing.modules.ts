import { NgModule } from '@angular/core';

import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NoAuthGuard } from 'src/app/services/guard/noguard.guard';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './pages/pages.routes';

const routes: Routes = [
  {
    path: 'auth',
    children: [...AuthRoutes],
    canActivate: [NoAuthGuard],
    component:AuthComponent,
    data: {
      role: '*',
      title: 'Login',
      tag: 'login',
      isShowHeader: true,
    },
  },
  
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
