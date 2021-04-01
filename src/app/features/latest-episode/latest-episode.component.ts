import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Episode, MOCK_EPISODE } from './episode.model';

@Component({
  selector: 'app-latest-episode',
  templateUrl: './latest-episode.component.html',
  styleUrls: ['./latest-episode.component.scss']
})
export class LatestEpisodeComponent implements OnInit {
  @Input('episode') episode: Episode = MOCK_EPISODE;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.router.navigate([this.episode.url]);
  }

}
