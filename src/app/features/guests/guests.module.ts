import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { GuestsRoutingModule } from './guests-routing.module';
import { GuestsComponent } from './guests.component';


@NgModule({
  declarations: [GuestsComponent],
  imports: [
    SharedModule,
    GuestsRoutingModule
  ]
})
export class GuestsModule { }
