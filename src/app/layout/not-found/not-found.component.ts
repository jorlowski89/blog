import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private layoutService: LayoutService, private router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.layoutService.back();
  }

  goHome(): void {
    this.router.navigateByUrl('/');
  };

}