import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog';
  sideMenu = false;

  constructor(
    private layoutService: LayoutService,
  ) { }


  ngOnInit(): void {

    this.layoutService.sideMenuShowing.subscribe(val => (this.sideMenu = val));
  }

}
