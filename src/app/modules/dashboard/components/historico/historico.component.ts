import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HistoricoService } from '../../../../services/historico.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  public identity;
  displayedColumns: string[] = ['REF_CATASTRAL', 'No_RESOLUCION', 'No_EXPEDIENTE', 'FECHA','VIG_DETERMINADAS', 'NOTIFICADO_DEVUELTO', 'BUSQUEDA', 'TOTAL_DETERMINADO', 'actions'];
  dataSource = new MatTableDataSource();
  constructor( private historicoService: HistoricoService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.historicoService.list_historico().subscribe( 
      res => {
        this.dataSource.data = res.historico;
    }, error => {
      console.log(<any> error);
    }
    
    );
  }

  ngDoCheck() {
    this.identity = localStorage.getItem('user');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(id:string){
    console.log("id:", id)
    this.historicoService.delete_historico(id).subscribe(
      resp => {
        console.log(resp)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/menu/historicos"]));
      }
    );
  }

}
