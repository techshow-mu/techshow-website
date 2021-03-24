import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <p>
    home works!
    
    <button class="button">click</button><br><br>
    <button class="button">click</button><br><br>
    <button class="button">click</button><br><br>
    <button class="button">click</button><br>
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
