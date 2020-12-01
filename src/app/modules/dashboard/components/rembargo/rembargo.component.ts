import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RembargoService } from '../../../../services/rembargo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-rembargo',
  templateUrl: './rembargo.component.html',
  styleUrls: ['./rembargo.component.css']
})
export class RembargoComponent implements OnInit {

  displayedColumns: string[] = ['reolucion_no', 'no_expediente', 'fecha', 'propietario', 'cedula','referencia_catastral','direccion', 'matricula', 'valor', 'actions'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private rembargoService: RembargoService,
    private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.rembargoService.list_rembargo().subscribe( 
      res => {
        this.dataSource.data = res.rembargo;
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
    this.rembargoService.delete_rembargo(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/rembargo"]));
      }
    );
  }

}
