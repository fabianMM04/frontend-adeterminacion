import { Component, OnInit, Inject } from '@angular/core';
import { NembargoService } from '../../../../services/nembargo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-nembargoform',
  templateUrl: './nembargoform.component.html',
  styleUrls: ['./nembargoform.component.css']
})
export class NembargoformComponent implements OnInit {

  nembargoformGroup: FormGroup;
  constructor(public nembargoSerive: NembargoService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<NembargoformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.nembargoSerive.selected._id == null){
      console.log("save enmbargo-----------:", this.nembargoformGroup.value)
      this.nembargoSerive.add_nembargo(this.nembargoformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/nembargo"]));
        }
      );
    }else{

    let datos= this.nembargoformGroup.value;
    if (datos.reolucion_no == ""){
      delete datos['reolucion_no']
    }
    if (datos.cdt == ""){
      delete datos['cdt']
    }
    if (datos.fecha == ""){
      delete datos['fecha']
    }
    if (datos.matricula == ""){
      delete datos['matricula']
    }
    if (datos.propietario == ""){
      delete datos['propietario']
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
    
    this.nembargoSerive.edit_nembargo(this.nembargoSerive.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/nembargo"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.nembargoformGroup = new FormGroup({
      reolucion_no: new FormControl(''),
      cdt: new FormControl(''),
      fecha: new FormControl(''),
      matricula: new FormControl(''),
      referencia_catastral: new FormControl(''),
      propietario: new FormControl(''),
      vigencias: new FormControl(''),
      valor: new FormControl('')
    })
  }

  close(): void{
    this.dialogRef.close();

  }

}
