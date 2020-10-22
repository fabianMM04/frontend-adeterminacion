import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { RconvenioComponent } from './components/rconvenio/rconvenio.component';
import { NembargoComponent } from './components/nembargo/nembargo.component';
import { MandamientopagoComponent } from './components/mandamientopago/mandamientopago.component';
import { ResolucionesComponent } from './components/resoluciones/resoluciones.component';
import { RunoydosComponent } from './components/runoydos/runoydos.component';
import { RembargoComponent } from './components/rembargo/rembargo.component';
import { ScontribuyenteComponent } from './components/scontribuyente/scontribuyente.component';
import { SarchivoComponent } from './components/sarchivo/sarchivo.component';
import { SabogadoComponent } from './components/sabogado/sabogado.component';


@NgModule({
  declarations: [NavComponent, RconvenioComponent, NembargoComponent, MandamientopagoComponent, ResolucionesComponent, RunoydosComponent, RembargoComponent, ScontribuyenteComponent, SarchivoComponent, SabogadoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ]
})
export class DashboardModule { }
