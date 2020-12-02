import { Component, OnInit, Inject } from '@angular/core';
import { ResolucionService } from '../../../../services/resoluciones.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-resolucionesform',
  templateUrl: './resolucionesform.component.html',
  styleUrls: ['./resolucionesform.component.css']
})
export class ResolucionesformComponent implements OnInit {

  resolucionesformGroup: FormGroup;
  constructor(public resolucionesSerive: ResolucionService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<ResolucionesformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.resolucionesSerive.selected._id == null){
      console.log("save enmbargo-----------:", this.resolucionesformGroup.value)
      this.resolucionesSerive.add_resolucion(this.resolucionesformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/resoluciones"]));
        }
      );
    }else{

    let datos= this.resolucionesformGroup.value;
    if (datos.resolucion_no == ""){
      delete datos['resolucion_no']
    }
    if (datos.no_expediente == ""){
      delete datos['no_expediente']
    }
    if (datos.referencia_catastral == ""){
      delete datos['referencia_catastral']
    }
    if (datos.direccion == ""){
      delete datos['direccion']
    }
    if (datos.propietario == ""){
      delete datos['propietario']
    }
    if (datos.valor == ""){
      delete datos['valor']
    }
    if (datos.vigencias == ""){
      delete datos['vigencias']
    }
    if (datos.fecha == ""){
      delete datos['fecha']
    }
    if (datos.notificacion == ""){
      delete datos['notificacion']
    }
    if (datos.ciudad == ""){
      delete datos['ciudad']
    }
    
    this.resolucionesSerive.edit_resolucion(this.resolucionesSerive.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/resoluciones"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.resolucionesformGroup = new FormGroup({
      resolucion_no: new FormControl(''),
      no_expediente: new FormControl(''),
      referencia_catastral: new FormControl(''),
      direccion: new FormControl(''),
      propietario: new FormControl(''),
      valor: new FormControl(''),
      vigencias: new FormControl(''),
      fecha: new FormControl(''),
      notificacion: new FormControl(''),
      ciudad: new FormControl('')
    })
  }

  close(): void{
    this.dialogRef.close();

  }

}
