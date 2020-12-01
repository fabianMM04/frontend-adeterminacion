  import { Component, OnInit, Inject } from '@angular/core';
import { MandamientoPagoService } from '../../../../services/mandamientopago.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-mandamientopagoform',
  templateUrl: './mandamientopagoform.component.html',
  styleUrls: ['./mandamientopagoform.component.css']
})
export class MandamientopagoformComponent implements OnInit {
  mandamientoformGroup: FormGroup;
  constructor(public mandamientopagoSerive: MandamientoPagoService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<MandamientopagoformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.mandamientopagoSerive.selected._id == null){
      this.mandamientopagoSerive.add_mandamientopago(this.mandamientoformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/mandamientopago"]));
        }
      );
    }else{

    let update = {}
    let datos= this.mandamientoformGroup.value;
    if (datos.ciudad == ""){
      delete datos['ciudad']
    }
    if (datos.direccion == ""){
      delete datos['direccion']
    }
    if (datos.fecha == ""){
      delete datos['fecha']
    }
    if (datos.mandamiento_no == ""){
      delete datos['mandamiento_no']
    }
    if (datos.no_expediente == ""){
      delete datos['no_expediente']
    }
    if (datos.notificacion == ""){
      delete datos['notificacion']
    }
    if (datos.propietario == ""){
      delete datos['propietario']
    }
    if (datos.referencia_catastral == ""){
      delete datos['referencia_catastral']
    }
    if (datos.reolucion_no == ""){
      delete datos['reolucion_no']
    }
    if (datos.valor == ""){
      delete datos['valor']
    }
    if (datos.vigencias == ""){
      delete datos['vigencias']
    }
    
    this.mandamientopagoSerive.edit_mandamientopago(this.mandamientopagoSerive.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/mandamientopago"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.mandamientoformGroup = new FormGroup({
      reolucion_no: new FormControl(''),
      no_expediente: new FormControl(''),
      fecha: new FormControl(''),
      direccion: new FormControl(''),
      ciudad: new FormControl(''),
      referencia_catastral: new FormControl(''),
      propietario: new FormControl(''),
      vigencias: new FormControl(''),
      valor: new FormControl(''),
      mandamiento_no: new FormControl(''),
      notificacion: new FormControl(''),
    })
  }

  close(): void{
    this.dialogRef.close();

  }
}
