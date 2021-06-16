import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScontribuyenteService } from '../../../../services/scontribuyente.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ScontribuyenteformComponent } from '../scontribuyenteform/scontribuyenteform.component';
@Component({
  selector: 'app-scontribuyente',
  templateUrl: './scontribuyente.component.html',
  styleUrls: ['./scontribuyente.component.css']
})
export class ScontribuyenteComponent implements OnInit {
  public identity;
  displayedColumns: string[] = ['estado', 'ciudad', 'fecha', 'propietario', 'referencia_catastral', 'vigencias', 'matricula', 'notificacion', 'codigo_no','actions', 'new'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private scontribuyenteService: ScontribuyenteService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {

    if( localStorage.getItem('user') == 'CONTRIBUYENTE'){
      this.scontribuyenteService.list_byuser_scontribuyente(localStorage.getItem('id')).subscribe( 
        res => {
          this.dataSource.data = res.scontribuyente;
      }, error => {
        console.log(<any> error);
      }
      
      );
    }else{
      this.scontribuyenteService.list_scontribuyente().subscribe( 
        res => {
          this.dataSource.data = res.scontribuyente;
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
    //this.resetForm();
    this.openForm();
    if(element) {
      this.scontribuyenteService.selected = element;
    }
  }

  onDelete(id:string){
    console.log("id:", id)
    this.scontribuyenteService.delete_scontribuyente(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/scontribuyente"]));
      }
    );
  }

  openForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: "modal"
    };
    dialogConfig.autoFocus = true;
    
    this.dialog.open(ScontribuyenteformComponent, dialogConfig);
  }

  resetForm(): void {
    this.scontribuyenteService.selected._id = null;
    this.scontribuyenteService.selected.ciudad = '';
    this.scontribuyenteService.selected.fecha = '';
    this.scontribuyenteService.selected.propietario = '';
    this.scontribuyenteService.selected.referencia_catastral = '';
    this.scontribuyenteService.selected.vigencias = '';
    this.scontribuyenteService.selected.matricula = '';
    this.scontribuyenteService.selected.notificacion = '';
    this.scontribuyenteService.selected.codigo_no = '';

  }
}
