import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResolucionService } from '../../../../services/resoluciones.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ResolucionesformComponent } from '../resolucionesform/resolucionesform.component';
@Component({
  selector: 'app-resoluciones',
  templateUrl: './resoluciones.component.html',
  styleUrls: ['./resoluciones.component.css']
})
export class ResolucionesComponent implements OnInit {
  public identity;
  displayedColumns: string[] = ['resolucion_no', 'no_expediente', 'referencia_catastral','direccion', 'propietario', 'valor', 'vigencias', 'fecha', 'notificacion', 'ciudad', 'actions', 'new'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private resolucionService: ResolucionService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog ) { }

  ngOnInit() {
    if( localStorage.getItem('user') == 'CONTRIBUYENTE'){
      this.resolucionService.list_byuser_resolucion(localStorage.getItem('id')).subscribe( 
        res => {
          this.dataSource.data = res.resolucion;
      }, error => {
        console.log(<any> error);
      }
      
      );
  }else{
    this.resolucionService.list_resolucion().subscribe( 
      res => {
        this.dataSource.data = res.resolucion;
    }, error => {
      console.log(<any> error);
    }
    
    );
  }
  }

  ngDoCheck() {
    this.identity = localStorage.getItem('user');
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
    this.resetForm();
    this.openForm();
    if(element) {
      this.resolucionService.selected = element;
    }
  }

  onDelete(id:string){
    console.log("id:", id)
    this.resolucionService.delete_resolucion(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/resoluciones"]));
      }
    );
  }

  openForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: "modal"
    };
    dialogConfig.autoFocus = true;
    
    this.dialog.open(ResolucionesformComponent, dialogConfig);
  }

  resetForm(): void {
    this.resolucionService.selected._id = null;
    this.resolucionService.selected.resolucion_no = '';
    this.resolucionService.selected.referencia_catastral = '';
    this.resolucionService.selected.direccion = '';
    this.resolucionService.selected.propietario = '';
    this.resolucionService.selected.valor = '';
    this.resolucionService.selected.vigencias = '';
    this.resolucionService.selected.fecha = '';
    this.resolucionService.selected.notificacion = '';
    this.resolucionService.selected.ciudad = '';

  }
}
