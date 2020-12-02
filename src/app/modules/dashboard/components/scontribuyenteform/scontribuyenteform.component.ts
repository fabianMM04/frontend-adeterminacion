import { Component, OnInit, Inject } from '@angular/core';
import { ScontribuyenteService } from '../../../../services/scontribuyente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-scontribuyenteform',
  templateUrl: './scontribuyenteform.component.html',
  styleUrls: ['./scontribuyenteform.component.css']
})
export class ScontribuyenteformComponent implements OnInit {

  scontribuyenteformGroup: FormGroup;
  constructor(public scontribuyenteSerive: ScontribuyenteService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<ScontribuyenteformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.scontribuyenteSerive.selected._id == null){
      console.log("save enmbargo-----------:", this.scontribuyenteformGroup.value)
      this.scontribuyenteSerive.add_scontribuyente(this.scontribuyenteformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/scontribuyente"]));
        }
      );
    }else{

    let datos= this.scontribuyenteformGroup.value;
    if (datos.ciudad == ""){
      delete datos['ciudad']
    }
    if (datos.fecha == ""){
      delete datos['fecha']
    }
    if (datos.propietario == ""){
      delete datos['propietario']
    }
    if (datos.referencia_catastral == ""){
      delete datos['referencia_catastral']
    }
    if (datos.vigencias == ""){
      delete datos['vigencias']
    }
    if (datos.matricula == ""){
      delete datos['matricula']
    }
    if (datos.notificacion == ""){
      delete datos['notificacion']
    }
    if (datos.codigo_no == ""){
      delete datos['codigo_no']
    }
    
    
    this.scontribuyenteSerive.edit_scontribuyente(this.scontribuyenteSerive.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/scontribuyente"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.scontribuyenteformGroup = new FormGroup({
      ciudad: new FormControl(''),
      fecha: new FormControl(''),
      propietario: new FormControl(''),
      referencia_catastral: new FormControl(''),
      vigencias: new FormControl(''),
      matricula: new FormControl(''),
      notificacion: new FormControl(''),
      codigo_no: new FormControl('')

    })
  }

  close(): void{
    this.dialogRef.close();

  }

}
