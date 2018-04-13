import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public route: Router) {

  }
  getHeaderStyle() {
    if (this.route.url.includes('/home')) {
        return 'transparent';
    } else if (this.route.url.includes('/skill')){
        return 'black';
    } else if (this.route.url.includes('/projects')){
        return 'black';
    } else if (this.route.url.includes('/contact')) {
         return 'grey';
}
}
}
