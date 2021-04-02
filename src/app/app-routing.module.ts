import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'podcasts', loadChildren: () => import('./features/podcasts/podcasts.module').then(m => m.PodcastsModule) },
  { path: 'guests', loadChildren: () => import('./features/guests/guests.module').then(m => m.GuestsModule) },
  { path: 'latest-episode', loadChildren: () => import('./features/latest-episode/latest-episode.module').then(m => m.LatestEpisodeModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
