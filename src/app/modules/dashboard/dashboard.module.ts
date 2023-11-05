import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { NavComponent } from "./components/nav/nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFileUploadModule } from "angular-material-fileupload";

import { RconvenioComponent } from "./components/rconvenio/rconvenio.component";
import { NembargoComponent } from "./components/nembargo/nembargo.component";
import { MandamientopagoComponent } from "./components/mandamientopago/mandamientopago.component";
import { ResolucionesComponent } from "./components/resoluciones/resoluciones.component";
import { RunoydosComponent } from "./components/runoydos/runoydos.component";
import { RembargoComponent } from "./components/rembargo/rembargo.component";
import { ScontribuyenteComponent } from "./components/scontribuyente/scontribuyente.component";
import { SarchivoComponent } from "./components/sarchivo/sarchivo.component";
import { SabogadoComponent } from "./components/sabogado/sabogado.component";

import { RconvenioService } from "../../services/rconvenio.service";
import { MandamientopagoformComponent } from "./components/mandamientopagoform/mandamientopagoform.component";
import { NembargoformComponent } from "./components/nembargoform/nembargoform.component";
import { RconvenioformComponent } from "./components/rconvenioform/rconvenioform.component";
import { RembargoformComponent } from "./components/rembargoform/rembargoform.component";
import { ResolucionesformComponent } from "./components/resolucionesform/resolucionesform.component";
import { RunoydosformComponent } from "./components/runoydosform/runoydosform.component";
import { SabogadoformComponent } from "./components/sabogadoform/sabogadoform.component";
import { SarchivoformComponent } from "./components/sarchivoform/sarchivoform.component";
import { ScontribuyenteformComponent } from "./components/scontribuyenteform/scontribuyenteform.component";
import { NmensajeriaComponent } from "./components/nmensajeria/nmensajeria.component";
import { NmensajeriaformComponent } from "./components/nmensajeriaform/nmensajeriaform.component";
import { HistoricoComponent } from "./components/historico/historico.component";
import { HistoricoformComponent } from "./components/historicoform/historicoform.component";

import { HistoricoseisonceComponent } from "./components/historicoseisonce/historicoseisonce.component";
import { HistoricoseisonceformComponent } from "./components/historicoseisonceform/historicoseisonceform.component";

import { HistoricoochoComponent } from "./components/historicoocho/historicoocho.component";
import { HistoricoochoformComponent } from "./components/historicoochoform/historicoochoform.component";

@NgModule({
  declarations: [
    NavComponent,
    RconvenioComponent,
    NembargoComponent,
    MandamientopagoComponent,
    ResolucionesComponent,
    RunoydosComponent,
    RembargoComponent,
    ScontribuyenteComponent,
    SarchivoComponent,
    SabogadoComponent,
    MandamientopagoformComponent,
    NembargoformComponent,
    RconvenioformComponent,
    RembargoformComponent,
    ResolucionesformComponent,
    RunoydosformComponent,
    SabogadoformComponent,
    SarchivoformComponent,
    ScontribuyenteformComponent,
    NmensajeriaComponent,
    NmensajeriaformComponent,
    HistoricoComponent,
    HistoricoseisonceComponent,
    HistoricoochoComponent,
    HistoricoformComponent,
    HistoricoseisonceformComponent,
    HistoricoochoformComponent,
  ],
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
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFileUploadModule,
  ],
  providers: [RconvenioService],
  entryComponents: [
    MandamientopagoformComponent,
    NembargoformComponent,
    RconvenioformComponent,
    RembargoformComponent,
    ResolucionesformComponent,
    RunoydosformComponent,
    SabogadoformComponent,
    SarchivoformComponent,
    ScontribuyenteformComponent,
    NmensajeriaComponent,
    NmensajeriaformComponent,
    HistoricoComponent,
    HistoricoseisonceComponent,
    HistoricoochoComponent,
    HistoricoformComponent,
    HistoricoseisonceformComponent,
    HistoricoochoformComponent,
  ],
})
export class DashboardModule {}
