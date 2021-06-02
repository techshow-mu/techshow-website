import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LatestEpisodeComponent } from './latest-episode.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: LatestEpisodeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LatestEpisodeModule { }
