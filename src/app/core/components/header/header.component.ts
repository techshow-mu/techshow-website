import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbar_logo_src: string;
  navigationLinks = ['home', 'podcasts', 'calendar', 'contact_us', 'guests', 'subscribe'];

  constructor() { }

  ngOnInit(): void {
  }

}
