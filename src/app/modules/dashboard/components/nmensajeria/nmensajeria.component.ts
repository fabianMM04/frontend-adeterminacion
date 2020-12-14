import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NmensajeriaService } from '../../../../services/nmensajeria.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NmensajeriaformComponent } from '../nmensajeriaform/nmensajeriaform.component';

@Component({
  selector: 'app-nmensajeria',
  templateUrl: './nmensajeria.component.html',
  styleUrls: ['./nmensajeria.component.css']
})
export class NmensajeriaComponent implements OnInit {

  displayedColumns: string[] = ['empresa', 'nombre', 'direccion', 'firma', 'id','actions', 'new'];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor( private nmensajeriaService: NmensajeriaService,
     private route: ActivatedRoute,
     private router: Router,
     private dialog: MatDialog) { }

  ngOnInit() {
    if( localStorage.getItem('user') == 'CONTRIBUYENTE'){
    this.nmensajeriaService.list_byuser_nmensajeria(localStorage.getItem('id')).subscribe( 
      res => {
        this.dataSource.data = res.nmensajeria;
    }, error => {
      console.log(<any> error);
    }
    
    );
  }else{
    this.nmensajeriaService.list_nmensajeria().subscribe( 
      res => {
        this.dataSource.data = res.nmensajeria;
    }, error => {
      console.log(<any> error);
    }
    
    );
  }

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
      this.nmensajeriaService.selected = element;
    }
  }

  onDelete(id:string){
    console.log("id:", id)
    this.nmensajeriaService.delete_nmensajeria(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/nmensajeria"]));
      }
    );
  }

  openForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: "modal"
    };
    dialogConfig.autoFocus = true;
    
    this.dialog.open(NmensajeriaformComponent, dialogConfig);
  }

  resetForm(): void {
    this.nmensajeriaService.selected._id = null;
    this.nmensajeriaService.selected.empresa = '';
    this.nmensajeriaService.selected.nombre = '';
    this.nmensajeriaService.selected.direccion = '';
    this.nmensajeriaService.selected.firma = '';
    this.nmensajeriaService.selected.id = '';
    
  }


}
