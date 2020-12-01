import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScontribuyenteService } from '../../../../services/scontribuyente.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-scontribuyente',
  templateUrl: './scontribuyente.component.html',
  styleUrls: ['./scontribuyente.component.css']
})
export class ScontribuyenteComponent implements OnInit {

  displayedColumns: string[] = ['ciudad', 'fecha', 'propietario', 'referencia_catastral', 'vigencias', 'matricula', 'notificacion', 'codigo_no','actions'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private scontribuyenteService: ScontribuyenteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.scontribuyenteService.list_scontribuyente().subscribe( 
      res => {
        this.dataSource.data = res.scontribuyente;
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
    this.scontribuyenteService.delete_scontribuyente(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/scontribuyente"]));
      }
    );
  }
}
