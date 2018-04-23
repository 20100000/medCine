/**
 * Created by tiago on 23/04/18.
 */
import { Routes, RouterModule }  from '@angular/router';

import { AgendaComponent } from './agenda.component';

const routes: Routes = [
  {
    path: '',
    component: AgendaComponent,
    children: [
      // { path: 'Agenda', component: AgendaComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
