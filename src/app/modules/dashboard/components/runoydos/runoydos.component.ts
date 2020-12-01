import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RunoydosService } from '../../../../services/runoydos.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-runoydos',
  templateUrl: './runoydos.component.html',
  styleUrls: ['./runoydos.component.css']
})
export class RunoydosComponent implements OnInit {

  displayedColumns: string[] = ['reolucion_no', 'no_expediente', 'referencia_catastral','direccion', 'propietario', 'matricula', 'vigencias', 'fecha', 'ciudad', 'actions'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private runoydosService: RunoydosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.runoydosService.list_runoydos().subscribe( 
      res => {
        this.dataSource.data = res.runoydos;
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
    this.runoydosService.delete_runoydos(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/runoydos"]));
      }
    );
  }

}
