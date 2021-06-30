import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RembargoService } from '../../../../services/rembargo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RembargoformComponent } from '../rembargoform/rembargoform.component';
@Component({
  selector: 'app-rembargo',
  templateUrl: './rembargo.component.html',
  styleUrls: ['./rembargo.component.css']
})
export class RembargoComponent implements OnInit {
  public identity;
  displayedColumns: string[] = ['estado', 'reolucion_no', 'no_expediente', 'fecha', 'propietario', 'cedula','referencia_catastral','direccion', 'matricula', 'valor', 'actions', 'new'];
  dataSource = new MatTableDataSource();
  private activo = 0;
  private cerrado = 0;
  private total = 0; 

  formGroup: FormGroup;
  constructor( private rembargoService: RembargoService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    if( localStorage.getItem('user') == 'CONTRIBUYENTE'){
    this.rembargoService.list_byuser_rembargo(localStorage.getItem('id')).subscribe( 
      res => {
        this.dataSource.data = res.rembargo;
    }, error => {
      console.log(<any> error);
    }
    
    );
  }else{
    this.rembargoService.list_rembargo().subscribe( 
      res => {
        this.dataSource.data = res.rembargo;
        this.activo = res.activos
        this.cerrado = res.cerrados
        this.total = res.total
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
      this.rembargoService.selected = element;
    }
  }

  onDelete(id:string){
    console.log("id:", id)
    this.rembargoService.delete_rembargo(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/rembargo"]));
      }
    );
  }

  openForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: "modal"
    };
    dialogConfig.autoFocus = true;
    
    this.dialog.open(RembargoformComponent, dialogConfig);
  }

  resetForm(): void {
    this.rembargoService.selected._id = null;
    this.rembargoService.selected.reolucion_no = '';
    this.rembargoService.selected.matricula = '';
    this.rembargoService.selected.fecha = '';
    this.rembargoService.selected.propietario = '';
    this.rembargoService.selected.referencia_catastral = '';
    this.rembargoService.selected.no_expediente = '';
    this.rembargoService.selected.valor = '';
    this.rembargoService.selected.cedula = '';
    this.rembargoService.selected.direccion = '';

  }

}
