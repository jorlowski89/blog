import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private history: string[] = [];
  public goingBack = false;

  private sideMenuState = new BehaviorSubject<boolean>(true);
  sideMenuShowing: Observable<boolean>;

  constructor(private router: Router, private location: Location) {
    this.sideMenuShowing = this.sideMenuState.asObservable();
  }

  toggleSideMenu(): void {
    this.sideMenuState.next(!this.sideMenuState.value);
  }

  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.goingBack = true;
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
