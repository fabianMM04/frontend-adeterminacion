  import { Component, OnInit, Inject } from '@angular/core';
import { HistoricoService } from '../../../../services/historico.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-historicoform',
  templateUrl: './historicoform.component.html',
  styleUrls: ['./historicoform.component.css']
})
export class HistoricoformComponent implements OnInit {
  historicoformGroup: FormGroup;
  constructor(public historicoSerive: HistoricoService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<HistoricoformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.historicoSerive.selected._id == null){
      this.historicoSerive.add_historico(this.historicoformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/historicos"]));
        }
      );
    }else{

    let update = {}
    let datos= this.historicoformGroup.value;
    if (datos.No_EXPEDIENTE == ""){
      delete datos['No_EXPEDIENTE']
    }
    if (datos.REF_CATASTRAL == ""){
      delete datos['REF_CATASTRAL']
    }
    if (datos.No_RESOLUCION == ""){
      delete datos['No_RESOLUCION']
    }
    if (datos.FECHA == ""){
      delete datos['FECHA']
    }
    if (datos.VIG_DETERMINADAS == ""){
      delete datos['VIG_DETERMINADAS']
    }
    if (datos.NOTIFICADO_DEVUELTO == ""){
      delete datos['NOTIFICADO_DEVUELTO']
    }
    if (datos.BUSQUEDA == ""){
      delete datos['BUSQUEDA']
    }
    if (datos.TOTAL_DETERMINADO == ""){
      delete datos['TOTAL_DETERMINADO']
    }
    
    this.historicoSerive.edit_historico(this.historicoSerive.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/historicos"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.historicoformGroup = new FormGroup({
      REF_CATASTRAL: new FormControl(''),
      No_RESOLUCION: new FormControl(''),
      No_EXPEDIENTE: new FormControl(''),
      FECHA: new FormControl(''),
      VIG_DETERMINADAS: new FormControl(''),
      NOTIFICADO_DEVUELTO: new FormControl(''),
      BUSQUEDA: new FormControl(''),
      TOTAL_DETERMINADO: new FormControl(''),
    })
  }

  close(): void{
    this.dialogRef.close();

  }
}
