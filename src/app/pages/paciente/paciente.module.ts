/**
 * Created by tiago on 23/04/18.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { PacienteComponent } from './paciente.component';
import { routing }       from './paciente.routing';


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
        PacienteComponent
    ]
})
export class PacienteModule {}