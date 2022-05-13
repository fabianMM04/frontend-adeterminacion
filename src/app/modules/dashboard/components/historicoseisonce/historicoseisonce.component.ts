import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HistoricoseisonceService } from '../../../../services/historicoseisonce.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-historicoseisonce',
  templateUrl: './historicoseisonce.component.html',
  styleUrls: ['./historicoseisonce.component.css']
})
export class HistoricoseisonceComponent implements OnInit {
  public identity;
  displayedColumns: string[] = ['REFERENCIA','REF_CATASTRAL', 'No_RESOLUCION', 'No_EXPEDIENTE', 'FECHA','VIG_DETERMINADAS', 'GRUPO','NOTIFICADO_DEVUELTO', 'BUSQUEDA', 'TOTAL_DETERMINADO', 'NO_IMAGE_SCANED','actions'];
  dataSource = new MatTableDataSource();
  constructor( private historicoService: HistoricoseisonceService,
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
          this.router.navigate(["/menu/historicosseisonce"]));
        }
      );
    }

}
