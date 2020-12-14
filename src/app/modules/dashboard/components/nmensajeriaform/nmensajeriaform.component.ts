import { Component, OnInit, Inject } from '@angular/core';
import { NmensajeriaService } from '../../../../services/nmensajeria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-nmensajeriaform',
  templateUrl: './nmensajeriaform.component.html',
  styleUrls: ['./nmensajeriaform.component.css']
})
export class NmensajeriaformComponent implements OnInit {

  nmensajeriaformGroup: FormGroup;
  constructor(public nmensajeriaService: NmensajeriaService,
    private route: ActivatedRoute,
     private router: Router,
     private dialogRef: MatDialogRef<NmensajeriaformComponent>,
     @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.initForm();
  }

  onSaveForm() {
    if (this.nmensajeriaService.selected._id == null){
      this.nmensajeriaService.add_nmensajeria(this.nmensajeriaformGroup.value).subscribe(
        resp => {
          console.log(resp)
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/menu/nmensajeria"]));
        }
      );
    }else{

    let update = {}
    let datos= this.nmensajeriaformGroup.value;
    if (datos.empresa == ""){
      delete datos['empresa']
    }
    if (datos.nombre == ""){
      delete datos['nombre']
    }
    if (datos.direccion == ""){
      delete datos['direccion']
    }
    if (datos.firma == ""){
      delete datos['firma']
    }
    if (datos.id == ""){
      delete datos['id']
    }
    
    
    
    this.nmensajeriaService.edit_nmensajeria(this.nmensajeriaService.selected._id, datos).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/nmensajeria"]));
      }
    );
    }
    this.close();
  }

  initForm(){
    this.nmensajeriaformGroup = new FormGroup({
      empresa: new FormControl(''),
      nombre: new FormControl(''),
      direccion: new FormControl(''),
      firma: new FormControl(''),
      id: new FormControl(''),
    })
  }

  close(): void{
    this.dialogRef.close();

  }

}
