import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private layoutService: LayoutService,) { }

  ngOnInit(): void {
  }

  toggleSideMenu(): void {
    this.layoutService.toggleSideMenu();
  }

}
