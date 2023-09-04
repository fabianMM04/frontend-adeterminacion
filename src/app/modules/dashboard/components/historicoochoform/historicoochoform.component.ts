  import { Component, OnInit, Inject } from '@angular/core';
import { HistoricoochoService } from '../../../../services/historicoocho.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-historicoochoform',
  templateUrl: './historicoochoform.component.html',
  styleUrls: ['./historicoochoform.component.css']
})
export class HistoricoochoformComponent implements OnInit {
  historicoochoformGroup: FormGroup;
  constructor(public historicoochoService: HistoricoochoService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<HistoricoochoformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.historicoochoService.selected._id == null){
      this.historicoochoService.add_historico(this.historicoochoformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/historicosocho"]));
        }
      );
    }else{

    let update = {}
    let datos= this.historicoochoformGroup.value;
    if (datos.REF_CATASTRAL_1 == ""){
      delete datos['REF_CATASTRAL_1']
    }
    if (datos.REF_CATASTRAL_2 == ""){
      delete datos['REF_CATASTRAL_2']
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
    if (datos.HOJA == ""){
      delete datos['HOJA']
    }
    if (datos.NOTIFICADO_DEVUELTO == ""){
      delete datos['NOTIFICADO_DEVUELTO']
    }
    if (datos.TOTAL_DETERMINADO == ""){
      delete datos['TOTAL_DETERMINADO']
    }
    
    this.historicoochoService.edit_historico(this.historicoochoService.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/historicosocho"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.historicoochoformGroup = new FormGroup({
      REF_CATASTRAL_1: new FormControl(''),
      REF_CATASTRAL_2: new FormControl(''),
      No_RESOLUCION: new FormControl(''),
      No_EXPEDIENTE: new FormControl(''),
      FECHA: new FormControl(''),
      VIG_DETERMINADAS: new FormControl(''),
      HOJA: new FormControl(''),
      NOTIFICADO_DEVUELTO: new FormControl(''),
      TOTAL_DETERMINADO: new FormControl(''),

    })
  }

  close(): void{
    this.dialogRef.close();

  }
}
