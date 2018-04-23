/**
 * Created by tiago on 23/04/18.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { AgendaComponent } from './agenda.component';
import { routing }       from './agenda.routing';

import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing

  ],
  declarations: [
    Calendar,
    AgendaComponent

  ],
  providers: [
    CalendarService
  ]
})
export class AgendaModule {}
