import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: string;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch(this.router.url) {
          case "/directors":
            this.currentRoute = 'home';
          break;
          case "/about":
            this.currentRoute = 'about';
          break;
            default:
              this.currentRoute = 'home';
        }
      }
    });
  }
}
