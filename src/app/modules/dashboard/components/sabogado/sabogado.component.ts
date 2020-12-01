import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SabogadoService } from '../../../../services/sabogado.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-sabogado',
  templateUrl: './sabogado.component.html',
  styleUrls: ['./sabogado.component.css']
})
export class SabogadoComponent implements OnInit {

  displayedColumns: string[] = ['odico_no', 'ciudad', 'fecha', 'funcionario_archivo', 'asunto', 'referencia_catastral', 'abogado_solicitante', 'actions'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private sabogadoService: SabogadoService,
    private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.sabogadoService.list_sabogado().subscribe( 
      res => {
        this.dataSource.data = res.sabogado;
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
    this.sabogadoService.delete_sabogado(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/sabogado"]));
      }
    );
  }

}
