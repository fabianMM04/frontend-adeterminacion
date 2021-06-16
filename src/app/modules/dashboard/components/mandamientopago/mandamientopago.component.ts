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
  public identity;
  displayedColumns: string[] = ['estado', 'reolucion_no', 'no_expediente', 'fecha', 'direccion', 'ciudad', 'referencia_catastral', 'propietario', 'vigencias', 'valor','mandamiento_no', 'notificacion','actions', 'new'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private mandamientoPagoService: MandamientoPagoService,
     private route: ActivatedRoute,
     private router: Router,
     private dialog: MatDialog) { }

  ngOnInit() {
    if( localStorage.getItem('user') == 'CONTRIBUYENTE'){
    this.mandamientoPagoService.list_byuser_mandamientopago(localStorage.getItem('id')).subscribe( 
      res => {
        this.dataSource.data = res.mandamientopago;
    }, error => {
      console.log(<any> error);
    }
    
    );
  }else{
    this.mandamientoPagoService.list_mandamientopago().subscribe( 
      res => {
        this.dataSource.data = res.mandamientopago;
    }, error => {
      console.log(<any> error);
    }
    
    );
  }

  }

  initForm(){
    this.formGroup = new FormGroup({
      filtro: new FormControl(''),
    })
  }

  ngDoCheck() {
    this.identity = localStorage.getItem('user');
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element){
    this.resetForm();
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

  resetForm(): void {
    this.mandamientoPagoService.selected._id = null;
    this.mandamientoPagoService.selected.cdt = '';
    this.mandamientoPagoService.selected.ciudad = '';
    this.mandamientoPagoService.selected.direccion = '';
    this.mandamientoPagoService.selected.fecha = '';
    this.mandamientoPagoService.selected.mandamiento_no = '';
    this.mandamientoPagoService.selected.no_expediente = '';
    this.mandamientoPagoService.selected.notificacion = '';
    this.mandamientoPagoService.selected.propietario = '';
    this.mandamientoPagoService.selected.referencia_catastral = '';
    this.mandamientoPagoService.selected.reolucion_no = '';
    this.mandamientoPagoService.selected.valor = '';
    this.mandamientoPagoService.selected.vigencias = '';
  }

}
