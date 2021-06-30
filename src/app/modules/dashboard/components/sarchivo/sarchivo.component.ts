import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SarchivoService } from '../../../../services/sarchivo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SarchivoformComponent } from '../sarchivoform/sarchivoform.component';
@Component({
  selector: 'app-sarchivo',
  templateUrl: './sarchivo.component.html',
  styleUrls: ['./sarchivo.component.css']
})
export class SarchivoComponent implements OnInit {
  public identity;
  displayedColumns: string[] = ['estado', 'odico_no', 'ciudad', 'fecha', 'afuncionario_archivo', 'asunto', 'expediente_no', 'abogado_solicitante', 'actions', 'new'];
  dataSource = new MatTableDataSource();
  private activo = 0;
  private cerrado = 0;
  private total = 0; 

  formGroup: FormGroup;
  
  constructor( private sarchivoService: SarchivoService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.sarchivoService.list_sarchivo().subscribe( 
      res => {
        this.dataSource.data = res.sarchivo;
        this.activo = res.activos
        this.cerrado = res.cerrados
        this.total = res.total
    }, error => {
      console.log(<any> error);
    }
    
    );
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
      this.sarchivoService.selected = element;
    }
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

  openForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: "modal"
    };
    dialogConfig.autoFocus = true;
    
    this.dialog.open(SarchivoformComponent, dialogConfig);
  }

  resetForm(): void {
    this.sarchivoService.selected._id = null;
    this.sarchivoService.selected.odico_no = '';
    this.sarchivoService.selected.ciudad = '';
    this.sarchivoService.selected.fecha = '';
    this.sarchivoService.selected.asunto = '';
    this.sarchivoService.selected.abogado_solicitante = '';
    this.sarchivoService.selected.afuncionario_archivo = '';
    this.sarchivoService.selected.expediente_no = '';
  }

}
