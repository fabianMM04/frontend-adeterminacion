import { Component, OnInit, Inject } from '@angular/core';
import { RembargoService } from '../../../../services/rembargo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-rembargoform',
  templateUrl: './rembargoform.component.html',
  styleUrls: ['./rembargoform.component.css']
})
export class RembargoformComponent implements OnInit {

  rembargoformGroup: FormGroup;
  constructor(public rembargoSerive: RembargoService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<RembargoformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.rembargoSerive.selected._id == null){
      console.log("save enmbargo-----------:", this.rembargoformGroup.value)
      this.rembargoSerive.add_rembargo(this.rembargoformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/rembargo"]));
        }
      );
    }else{

    let datos= this.rembargoformGroup.value;
    if (datos.reolucion_no == ""){
      delete datos['reolucion_no']
    }
    if (datos.no_expediente == ""){
      delete datos['no_expediente']
    }
    if (datos.fecha == ""){
      delete datos['fecha']
    }
    if (datos.propietario == ""){
      delete datos['propietario']
    }
    if (datos.cedula == ""){
      delete datos['cedula']
    }
    if (datos.referencia_catastral == ""){
      delete datos['referencia_catastral']
    }
    if (datos.direccion == ""){
      delete datos['direccion']
    }
    if (datos.matricula == ""){
      delete datos['matricula']
    }
    if (datos.valor == ""){
      delete datos['valor']
    }
    
    
    this.rembargoSerive.edit_rembargo(this.rembargoSerive.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/rembargo"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.rembargoformGroup = new FormGroup({
      reolucion_no: new FormControl(''),
      no_expediente: new FormControl(''),
      fecha: new FormControl(''),
      propietario: new FormControl(''),
      cedula: new FormControl(''),
      referencia_catastral: new FormControl(''),
      direccion: new FormControl(''),
      matricula: new FormControl(''),
      valor: new FormControl(''),
      
    })
  }

  close(): void{
    this.dialogRef.close();

  }

}
