import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  navbar_logo_src: string;
  navigationLinks = [
    {
      name: 'HomePage',
      linkTitle: 'home',
      path: ['home']
    },
    {
      name: 'PodcastsPage',
      linkTitle: 'podcasts',
      path: ['podcasts']
    },
    {
      name: 'GuestsPage',
      linkTitle: 'guests',
      path: ['guests']
    },
    {
      name: 'CalendarPage',
      linkTitle: 'calendar',
      path: ['calendar']
    }
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
