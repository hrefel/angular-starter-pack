import { Component, DoCheck, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { AnalyticsService, SeoService } from './core/utils';
import { AuthService } from './services/auth.service';
import { MENU_ITEMS } from './shared/modul-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  menu: any;
  dataLogin = this.authService.currentUserLoggin
    ? JSON.parse(this.authService.currentUserLoggin)
    : null;
  isAuth: boolean = false;
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        
        let title = document.getElementsByTagName('title');
        title[0].innerText = data.state.root.firstChild.data.title
          ? data.state.root.firstChild.data.title +
            ' - Rekrutmen Online'
          : '*';
      }

      switch (true) {
        case data instanceof NavigationStart: {
          // dinamis title web app

          
          break;
        }

        case data instanceof NavigationError: {
          this.router.navigate(["/"]);
          break;
        }

        case data instanceof NavigationEnd:
        case data instanceof NavigationCancel: {
          
          break;
        }

        default: {
          break;
        }
      }
    });

    this.isAuth = authService.currentUserToken;
  }

  ngOnInit() {
    this.menu = MENU_ITEMS;
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();

    
  }

  ngDoCheck() {}
}
