import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home',
  template: `
  <p>
    home works!
    <app-button text="This is a property-passsed text"></app-button><br>
    <app-button text="a"></app-button><br>
    <app-button text="b"></app-button><br>
    <app-button text="wwrtrewt"></app-button><br>
    <app-button text="wrtrewtrwt"></app-button><br>
  </p>
  `
    ,
    styleUrls: ['../app.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
