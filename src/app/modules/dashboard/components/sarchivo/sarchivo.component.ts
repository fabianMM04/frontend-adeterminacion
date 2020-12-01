import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SarchivoService } from '../../../../services/sarchivo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-sarchivo',
  templateUrl: './sarchivo.component.html',
  styleUrls: ['./sarchivo.component.css']
})
export class SarchivoComponent implements OnInit {

  displayedColumns: string[] = ['odico_no', 'ciudad', 'fecha', 'afuncionario_archivo', 'asunto', 'expediente_no', 'abogado_solicitante', 'actions'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private sarchivoService: SarchivoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sarchivoService.list_sarchivo().subscribe( 
      res => {
        this.dataSource.data = res.sarchivo;
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
    this.sarchivoService.delete_sarchivo(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/sarchivo"]));
      }
    );
  }

}
