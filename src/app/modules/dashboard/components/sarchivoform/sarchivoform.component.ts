import { Component, OnInit, Inject } from '@angular/core';
import { SarchivoService } from '../../../../services/sarchivo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-sarchivoform',
  templateUrl: './sarchivoform.component.html',
  styleUrls: ['./sarchivoform.component.css']
})
export class SarchivoformComponent implements OnInit {

  sarchivoformGroup: FormGroup;
  constructor(public sarchivoSerive: SarchivoService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<SarchivoformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.sarchivoSerive.selected._id == null){
      console.log("save enmbargo-----------:", this.sarchivoformGroup.value)
      this.sarchivoSerive.add_sarchivo(this.sarchivoformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/sarchivo"]));
        }
      );
    }else{

    let datos= this.sarchivoformGroup.value;
    if (datos.odico_no == ""){
      delete datos['odico_no']
    }
    if (datos.ciudad == ""){
      delete datos['ciudad']
    }
    if (datos.fecha == ""){
      delete datos['fecha']
    }
    if (datos.asunto == ""){
      delete datos['asunto']
    }
    if (datos.abogado_solicitante == ""){
      delete datos['abogado_solicitante']
    }
    if (datos.afuncionario_archivo == ""){
      delete datos['afuncionario_archivo']
    }
    if (datos.expediente_no == ""){
      delete datos['expediente_no']
    }
    
    
    
    this.sarchivoSerive.edit_sarchivo(this.sarchivoSerive.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/sarchivo"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.sarchivoformGroup = new FormGroup({
      odico_no: new FormControl(''),
      ciudad: new FormControl(''),
      fecha: new FormControl(''),
      asunto: new FormControl(''),
      abogado_solicitante: new FormControl(''),
      afuncionario_archivo: new FormControl(''),
      expediente_no: new FormControl('')
    })
  }

  close(): void{
    this.dialogRef.close();

  }

}
