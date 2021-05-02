import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  items: string[] = ['O mnie', 'Posty', 'Archiwum postów', 'Kontakt'];


  route(item): void {
    if (item == "O mnie") {
      this.router.navigateByUrl('/home');
    } else if (item == "Posty") {
      this.router.navigateByUrl('/posts');
    } else if (item == "Archiwum postów") {
      this.router.navigateByUrl('/posts-arch');
    } else if (item == "Kontakt") {
      this.router.navigateByUrl('/contact');
    }
  }
}
