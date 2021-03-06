import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NembargoService } from '../../../../services/nembargo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NembargoformComponent } from '../nembargoform/nembargoform.component';
@Component({
  selector: 'app-nembargo',
  templateUrl: './nembargo.component.html',
  styleUrls: ['./nembargo.component.css']
})
export class NembargoComponent implements OnInit {
  public identity;
  displayedColumns: string[] = ['estado', 'reolucion_no', 'cdt', 'fecha', 'matricula', 'referencia_catastral', 'propietario', 'vigencias', 'valor', 'actions', 'new'];
  dataSource = new MatTableDataSource();
  private activo = 0;
  private cerrado = 0;
  private total = 0; 

  formGroup: FormGroup;
  constructor( private nembargoService: NembargoService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.nembargoService.list_nembargo().subscribe( 
      res => {
        this.dataSource.data = res.nembargo;
        this.activo = res.activos
        this.cerrado = res.cerrados
        this.total = res.total
    }, error => {
      console.log(<any> error);
    }
    
    );
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
      this.nembargoService.selected = element;
    }
  }

  onDelete(id:string){
    console.log("id:", id)
    this.nembargoService.delete_nembargo(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/nembargo"]));
      }
    );
  }

  openForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: "modal"
    };
    dialogConfig.autoFocus = true;
    
    this.dialog.open(NembargoformComponent, dialogConfig);
  }

  resetForm(): void {
    this.nembargoService.selected._id = null;
    this.nembargoService.selected.cdt = '';
    this.nembargoService.selected.matricula = '';
    this.nembargoService.selected.fecha = '';
    this.nembargoService.selected.propietario = '';
    this.nembargoService.selected.referencia_catastral = '';
    this.nembargoService.selected.reolucion_no = '';
    this.nembargoService.selected.valor = '';
    this.nembargoService.selected.vigencias = '';
  }


}
