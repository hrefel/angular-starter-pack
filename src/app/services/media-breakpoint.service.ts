import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class MediaBreakpointService {
  private dataMedia: BehaviorSubject<any>;
  public currentMedia: Observable<any>;

  constructor(private breakpointObs: BreakpointObserver) {}

  public getMedia() {
    let result = null;
    this.breakpointObs
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          result = 'xs';
        }
        if (state.breakpoints[Breakpoints.Small]) {
          result = 's';
        }
        if (state.breakpoints[Breakpoints.Medium]) {
          result = 'm';
        }
        if (state.breakpoints[Breakpoints.Large]) {
          result = 'l';
        }
        if (state.breakpoints[Breakpoints.XLarge]) {
          result = 'xl';
        }
      });

    return result;
  }
}
