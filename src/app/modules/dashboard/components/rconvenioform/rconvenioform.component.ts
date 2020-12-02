import { Component, OnInit, Inject } from '@angular/core';
import { RconvenioService } from '../../../../services/rconvenio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-rconvenioform',
  templateUrl: './rconvenioform.component.html',
  styleUrls: ['./rconvenioform.component.css']
})
export class RconvenioformComponent implements OnInit {

  rconvenioformGroup: FormGroup;
  constructor(public rconvenioSerive: RconvenioService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<RconvenioformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.rconvenioSerive.selected._id == null){
      console.log("save enmbargo-----------:", this.rconvenioformGroup.value)
      this.rconvenioSerive.add_rconvenio(this.rconvenioformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/rconvenio"]));
        }
      );
    }else{

    let datos= this.rconvenioformGroup.value;
    if (datos.reolucion_facilidad == ""){
      delete datos['reolucion_facilidad']
    }
    if (datos.propietario == ""){
      delete datos['propietario']
    }
    if (datos.no_expediente == ""){
      delete datos['no_expediente']
    }
    if (datos.cedula == ""){
      delete datos['cedula']
    }
    if (datos.referencia_catastral == ""){
      delete datos['referencia_catastral']
    }
    if (datos.valor == ""){
      delete datos['valor']
    }
    if (datos.vigencias == ""){
      delete datos['vigencias']
    }
    if (datos.no_cuotas == ""){
      delete datos['no_cuotas']
    }
    if (datos.pagare_no == ""){
      delete datos['pagare_no']
    }
    if (datos.notificacion == ""){
      delete datos['notificacion']
    }
    if (datos.ciudad == ""){
      delete datos['ciudad']
    }
    
    this.rconvenioSerive.edit_rconvenio(this.rconvenioSerive.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/rconvenio"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.rconvenioformGroup = new FormGroup({
      reolucion_facilidad: new FormControl(''),
      propietario: new FormControl(''),
      no_expediente: new FormControl(''),
      cedula: new FormControl(''),
      referencia_catastral: new FormControl(''),
      valor: new FormControl(''),
      vigencias: new FormControl(''),
      no_cuotas: new FormControl(''),
      pagare_no: new FormControl(''),
      notificacion: new FormControl(''),
      ciudad: new FormControl('')
    })
  }

  close(): void{
    this.dialogRef.close();

  }

}
