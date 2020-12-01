import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RconvenioService } from '../../../../services/rconvenio.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-rconvenio',
  templateUrl: './rconvenio.component.html',
  styleUrls: ['./rconvenio.component.css']
})
export class RconvenioComponent implements OnInit {
  displayedColumns: string[] = ['reolucion_facilidad', 'propietario', 'no_expediente', 'cedula', 'referencia_catastral', 'valor', 'vigencias', 'no_cuotas', 'pagare_no', 'notificacion', 'ciudad', 'actions'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private rconvenioService: RconvenioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.rconvenioService.list_rconvenio().subscribe( 
      res => {
        this.dataSource.data = res.resolucionconvenio;
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
    this.rconvenioService.delete_rconvenio(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/rconvenio"]));
      }
    );
  }
}
