import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResolucionService } from '../../../../services/resoluciones.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-resoluciones',
  templateUrl: './resoluciones.component.html',
  styleUrls: ['./resoluciones.component.css']
})
export class ResolucionesComponent implements OnInit {
  displayedColumns: string[] = ['resolucion_no', 'no_expediente', 'referencia_catastral','direccion', 'propietario', 'valor', 'vigencias', 'fecha', 'notificacion', 'ciudad', 'actions'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private resolucionService: ResolucionService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.resolucionService.list_resolucion().subscribe( 
      res => {
        this.dataSource.data = res.resolucion;
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
}
