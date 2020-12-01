import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MandamientoPagoService } from '../../../../services/mandamientopago.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MandamientopagoformComponent } from '../mandamientopagoform/mandamientopagoform.component';
@Component({
  selector: 'app-mandamientopago',
  templateUrl: './mandamientopago.component.html',
  styleUrls: ['./mandamientopago.component.css']
})
export class MandamientopagoComponent implements OnInit {

  displayedColumns: string[] = ['reolucion_no', 'no_expediente', 'fecha', 'direccion', 'ciudad', 'referencia_catastral', 'propietario', 'vigencias', 'valor','mandamiento_no', 'notificacion','actions', 'new'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private mandamientoPagoService: MandamientoPagoService,
     private route: ActivatedRoute,
     private router: Router,
     private dialog: MatDialog) { }

  ngOnInit() {
    this.mandamientoPagoService.list_mandamientopago().subscribe( 
      res => {
        this.dataSource.data = res.mandamientopago;
    }, error => {
      console.log(<any> error);
    }
    
    );
  }

  initForm(){
    this.formGroup = new FormGroup({
      filtro: new FormControl(''),
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element){
    this.openForm();
    if(element) {
      this.mandamientoPagoService.selected = element;
    }
  }

  onDelete(id:string){
    console.log("id:", id)
    this.mandamientoPagoService.delete_mandamientopago(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/mandamientopago"]));
      }
    );
  }

  openForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: "modal"
    };
    dialogConfig.autoFocus = true;
    
    this.dialog.open(MandamientopagoformComponent, dialogConfig);
  }

}
