import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastsComponent } from './podcasts.component';

const routes: Routes = [
  { path: '', component: PodcastsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastsRoutingModule { }
