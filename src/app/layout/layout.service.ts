import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private sideMenuState = new BehaviorSubject<boolean>(true);
  sideMenuShowing: Observable<boolean>;

  constructor() {
    this.sideMenuShowing = this.sideMenuState.asObservable();
  }

  toggleSideMenu(): void {
    this.sideMenuState.next(!this.sideMenuState.value);
  }
}
