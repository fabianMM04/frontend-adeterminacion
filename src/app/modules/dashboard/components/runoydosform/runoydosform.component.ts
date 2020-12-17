import { Component, OnInit, Inject } from '@angular/core';
import { RunoydosService } from '../../../../services/runoydos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-runoydosform',
  templateUrl: './runoydosform.component.html',
  styleUrls: ['./runoydosform.component.css']
})
export class RunoydosformComponent implements OnInit {

  runoydosformGroup: FormGroup;
  constructor(public runoydosSerive: RunoydosService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<RunoydosformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.runoydosSerive.selected._id == null){
      console.log("save enmbargo-----------:", this.runoydosformGroup.value)
      this.runoydosSerive.add_runoydos(this.runoydosformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/runoydos"]));
        }
      );
    }else{

    let datos= this.runoydosformGroup.value;
    if (datos.reolucion_no == ""){
      delete datos['reolucion_no']
    }
    if (datos.propietario == ""){
      delete datos['propietario']
    }
    if (datos.referencia_catastral == ""){
      delete datos['referencia_catastral']
    }
    if (datos.no_expediente == ""){
      delete datos['no_expediente']
    }
    if (datos.fecha == ""){
      delete datos['fecha']
    }
    if (datos.direccion == ""){
      delete datos['direccion']
    }
    if (datos.ciudad == ""){
      delete datos['ciudad']
    }
    if (datos.vigencias == ""){
      delete datos['vigencias']
    }
    if (datos.matricula == ""){
      delete datos['matricula']
    }
    if (datos.cedula == ""){
      delete datos['cedula']
    }
    
    
    this.runoydosSerive.edit_runoydos(this.runoydosSerive.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/runoydos"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.runoydosformGroup = new FormGroup({
      reolucion_no: new FormControl(''),
      propietario: new FormControl(''),
      referencia_catastral: new FormControl(''),
      no_expediente: new FormControl(''),
      fecha: new FormControl(''),
      direccion: new FormControl(''),
      ciudad: new FormControl(''),
      vigencias: new FormControl(''),
      matricula: new FormControl(''),
      cedula: new FormControl('')

    })
  }

  close(): void{
    this.dialogRef.close();

  }

}
