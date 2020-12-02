import { Component, OnInit, Inject } from '@angular/core';
import { SabogadoService } from '../../../../services/sabogado.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sabogadoform',
  templateUrl: './sabogadoform.component.html',
  styleUrls: ['./sabogadoform.component.css']
})
export class SabogadoformComponent implements OnInit {

  sabogadoformGroup: FormGroup;
  constructor(public sabogadoSerive: SabogadoService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<SabogadoformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.sabogadoSerive.selected._id == null){
      console.log("save enmbargo-----------:", this.sabogadoformGroup.value)
      this.sabogadoSerive.add_sabogado(this.sabogadoformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/sabogado"]));
        }
      );
    }else{

    let datos= this.sabogadoformGroup.value;
    if (datos.odico_no == ""){
      delete datos['odico_no']
    }
    if (datos.ciudad == ""){
      delete datos['ciudad']
    }
    if (datos.fecha == ""){
      delete datos['fecha']
    }
    if (datos.funcionario_archivo == ""){
      delete datos['funcionario_archivo']
    }
    if (datos.asunto == ""){
      delete datos['asunto']
    }
    if (datos.referencia_catastral == ""){
      delete datos['referencia_catastral']
    }
    if (datos.abogado_solicitante == ""){
      delete datos['abogado_solicitante']
    }
    
    
    
    this.sabogadoSerive.edit_sabogado(this.sabogadoSerive.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/sabogado"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.sabogadoformGroup = new FormGroup({
      odico_no: new FormControl(''),
      ciudad: new FormControl(''),
      fecha: new FormControl(''),
      funcionario_archivo: new FormControl(''),
      asunto: new FormControl(''),
      referencia_catastral: new FormControl(''),
      abogado_solicitante: new FormControl('')
    })
  }

  close(): void{
    this.dialogRef.close();

  }

}
