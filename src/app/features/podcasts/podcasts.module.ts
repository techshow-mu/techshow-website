import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { PodcastsRoutingModule } from './podcasts-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PodcastsRoutingModule
  ]
})
export class PodcastsModule { }
