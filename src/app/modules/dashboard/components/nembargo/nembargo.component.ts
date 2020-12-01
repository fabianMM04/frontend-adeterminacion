import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NembargoService } from '../../../../services/nembargo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-nembargo',
  templateUrl: './nembargo.component.html',
  styleUrls: ['./nembargo.component.css']
})
export class NembargoComponent implements OnInit {

  displayedColumns: string[] = ['reolucion_no', 'cdt', 'fecha', 'matricula', 'referencia_catastral', 'propietario', 'vigencias', 'valor', 'actions'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private nembargoService: NembargoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.nembargoService.list_nembargo().subscribe( 
      res => {
        this.dataSource.data = res.nembargo;
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
    this.nembargoService.delete_nembargo(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/nembargo"]));
      }
    );
  }
}
