import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HistoricoService } from "../../../../services/historico.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { HistoricoformComponent } from "../historicoform/historicoform.component";

@Component({
  selector: "app-historico",
  templateUrl: "./historico.component.html",
  styleUrls: ["./historico.component.css"],
})
export class HistoricoComponent implements OnInit {
  public identity;
  displayedColumns: string[] = [
    "status",
    "REF_CATASTRAL",
    "No_RESOLUCION",
    "No_EXPEDIENTE",
    "FECHA",
    "VIG_DETERMINADAS",
    "NOTIFICADO_DEVUELTO",
    "BUSQUEDA",
    "TOTAL_DETERMINADO",
    "actions",
    "new",
  ];
  dataSource = new MatTableDataSource();

  formGroup: FormGroup;
  constructor(
    private historicoService: HistoricoService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.historicoService.list_historico().subscribe(
      (res) => {
        this.dataSource.data = res.historico;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  initForm() {
    this.formGroup = new FormGroup({
      filtro: new FormControl(""),
    });
  }

  ngDoCheck() {
    this.identity = localStorage.getItem("user");
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element) {
    this.resetForm();
    this.openForm();
    if (element) {
      this.historicoService.selected = element;
    }
  }

  onDelete(id: string) {
    console.log("id:", id);
    this.historicoService.delete_historico(id).subscribe((resp) => {
      console.log(resp);
      this.router
        .navigateByUrl("/", { skipLocationChange: true })
        .then(() => this.router.navigate(["/menu/historicos"]));
    });
  }

  openForm(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: "modal",
    };
    dialogConfig.autoFocus = true;

    this.dialog.open(HistoricoformComponent, dialogConfig);
  }

  resetForm(): void {
    this.historicoService.selected._id = null;
    this.historicoService.selected.REF_CATASTRAL = "";
    this.historicoService.selected.No_RESOLUCION = "";
    this.historicoService.selected.No_EXPEDIENTE = "";
    this.historicoService.selected.FECHA = "";
    this.historicoService.selected.VIG_DETERMINADAS = "";
    this.historicoService.selected.NOTIFICADO_DEVUELTO = "";
    this.historicoService.selected.BUSQUEDA = "";
    this.historicoService.selected.TOTAL_DETERMINADO = "";
  }
}
