import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RunoydosService } from '../../../../services/runoydos.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RunoydosformComponent } from '../runoydosform/runoydosform.component';
@Component({
  selector: 'app-runoydos',
  templateUrl: './runoydos.component.html',
  styleUrls: ['./runoydos.component.css']
})
export class RunoydosComponent implements OnInit {
  public identity;
  displayedColumns: string[] = ['reolucion_no', 'no_expediente', 'referencia_catastral','direccion', 'propietario', 'matricula', 'vigencias', 'fecha', 'ciudad', 'actions', 'new'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private runoydosService: RunoydosService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    if( localStorage.getItem('user') == 'CONTRIBUYENTE'){
      this.runoydosService.list_byuser_runoydos(localStorage.getItem('id')).subscribe( 
        res => {
          this.dataSource.data = res.runoydos;
      }, error => {
        console.log(<any> error);
      }
      
      );
  }else{
    this.runoydosService.list_runoydos().subscribe( 
      res => {
        this.dataSource.data = res.runoydos;
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
      this.runoydosService.selected = element;
    }
  }

  onDelete(id:string){
    console.log("id:", id)
    this.runoydosService.delete_runoydos(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/runoydos"]));
      }
    );
  }

  openForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: "modal"
    };
    dialogConfig.autoFocus = true;
    
    this.dialog.open(RunoydosformComponent, dialogConfig);
  }

  resetForm(): void {
    this.runoydosService.selected._id = null;
    this.runoydosService.selected.reolucion_no = '';
    this.runoydosService.selected.propietario = '';
    this.runoydosService.selected.referencia_catastral = '';
    this.runoydosService.selected.no_expediente = '';
    this.runoydosService.selected.fecha = '';
    this.runoydosService.selected.direccion = '';
    this.runoydosService.selected.ciudad = '';
    this.runoydosService.selected.vigencias = '';
    this.runoydosService.selected.matricula = '';

  }

}
