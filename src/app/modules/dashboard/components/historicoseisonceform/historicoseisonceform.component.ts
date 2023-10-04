  import { Component, OnInit, Inject } from '@angular/core';
import { HistoricoseisonceService } from '../../../../services/historicoseisonce.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-historicoseisonceform',
  templateUrl: './historicoseisonceform.component.html',
  styleUrls: ['./historicoseisonceform.component.css']
})
export class HistoricoseisonceformComponent implements OnInit {
  historicoseisonceformGroup: FormGroup;
  constructor(public historicoseisonceService: HistoricoseisonceService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<HistoricoseisonceformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.historicoseisonceService.selected._id == null){
      this.historicoseisonceService.add_historico(this.historicoseisonceformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/historicosseisonce"]));
        }
      );
    }else{

    let update = {}
    let datos= this.historicoseisonceformGroup.value;

    if (datos.REFERENCIA == ""){
      delete datos['REFERENCIA']
    }
    if (datos.REF_CATASTRAL == ""){
      delete datos['REF_CATASTRAL']
    }
    if (datos.No_RESOLUCION == ""){
      delete datos['No_RESOLUCION']
    }
    if (datos.No_EXPEDIENTE == ""){
      delete datos['No_EXPEDIENTE']
    }
    if (datos.FECHA == ""){
      delete datos['FECHA']
    }
    if (datos.VIG_DETERMINADAS == ""){
      delete datos['VIG_DETERMINADAS']
    }
    if (datos.GRUPO == ""){
      delete datos['GRUPO']
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
    if (datos.NO_IMAGE_SCANED == ""){
      delete datos['NO_IMAGE_SCANED']
    }
    
    this.historicoseisonceService.edit_historico(this.historicoseisonceService.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/historicosseisonce"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.historicoseisonceformGroup = new FormGroup({
      REFERENCIA: new FormControl(''),
      REF_CATASTRAL: new FormControl(''),
      No_RESOLUCION: new FormControl(''),
      No_EXPEDIENTE: new FormControl(''),
      FECHA: new FormControl(''),
      VIG_DETERMINADAS: new FormControl(''),
      GRUPO: new FormControl(''),
      NOTIFICADO_DEVUELTO: new FormControl(''),
      BUSQUEDA: new FormControl(''),
      TOTAL_DETERMINADO: new FormControl(''),
      NO_IMAGE_SCANED: new FormControl(''),

    })
  }

  close(): void{
    this.dialogRef.close();

  }
}
