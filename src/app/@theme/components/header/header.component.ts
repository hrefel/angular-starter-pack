import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';

import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    // {
    //   value: 'cosmic',
    //   name: 'Cosmic',
    // },
    // {
    //   value: 'corporate',
    //   name: 'Corporate',
    // },
  ];

  currentTheme = 'default';

  userMenu = [
    { title: 'Pasien Daftar' },
    { title: 'Profile' },
    { title: 'Log out' },
  ];

  constructor(
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private authService: AuthService,
    private http: HttpService,
    private router: Router,
    private breakpointService: NbMediaBreakpointsService
  ) {}

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    let dataLogin = JSON.parse(this.authService.currentUserLoggin);

    this.menuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'menu-user'),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        switch (title) {
          case 'Pasien Daftar':
            this.router.navigate(['pasien-daftar']);
            break;
          case 'Profile':
            this.router.navigate(['edit-profil']);
            break;
          case 'Log out':
            this.http.logout();
            break;
          default:
            break;
        }
      });

    this.user = dataLogin.username;

    const { xl } = this.breakpointService.getBreakpointsMap();

    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => (this.currentTheme = themeName));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  navigateHome() {
    // this.menuService.navigateHome();
    // return false;
  }
}
