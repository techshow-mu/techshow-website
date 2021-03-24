import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- home -->
    <app-home></app-home>

    <!-- home -->
    <app-footer></app-footer>
  `
    ,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'techshow-website';
}
