/**
 * Created by tiago on 23/04/18.
 */
import { Routes, RouterModule }  from '@angular/router';

import { PacienteComponent } from './paciente.component';
//import { Ckeditor } from './components/ckeditor/ckeditor.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: PacienteComponent,
        children: [
            { path: 'Paciente', component: PacienteComponent }
        ]
    }
];

export const routing = RouterModule.forChild(routes);