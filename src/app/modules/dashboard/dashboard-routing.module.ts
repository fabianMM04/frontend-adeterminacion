import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { RconvenioComponent } from './components/rconvenio/rconvenio.component';
import { NembargoComponent } from './components/nembargo/nembargo.component';
import { MandamientopagoComponent } from './components/mandamientopago/mandamientopago.component';
import { ResolucionesComponent } from './components/resoluciones/resoluciones.component';
import { RunoydosComponent } from './components/runoydos/runoydos.component';
import { RembargoComponent } from './components/rembargo/rembargo.component';
import { ScontribuyenteComponent } from './components/scontribuyente/scontribuyente.component';
import { SabogadoComponent } from './components/sabogado/sabogado.component';
import { SarchivoComponent } from './components/sarchivo/sarchivo.component';


const routes: Routes = [
  {path: '', component: NavComponent,
  children: [
    {path: 'rconvenio', component: RconvenioComponent},
    {path: 'nembargo', component: NembargoComponent},
    {path: 'mandamientopago', component: MandamientopagoComponent},
    {path: 'resoluciones', component: ResolucionesComponent},
    {path: 'runoydos', component: RunoydosComponent},
    {path: 'rembargo', component: RembargoComponent},
    {path: 'scontribuyente', component: ScontribuyenteComponent},
    {path: 'sabogado', component: SabogadoComponent},
    {path: 'sarchivo', component: SarchivoComponent},
    
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
