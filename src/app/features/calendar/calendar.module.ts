import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';


@NgModule({
  declarations: [CalendarComponent],
  imports: [
    SharedModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
