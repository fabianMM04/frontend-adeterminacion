import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  public url: string;

  public selected = {
    _id: null,
    REF_CATASTRAL: '',
    No_RESOLUCION: '',
    No_EXPEDIENTE: '',
    FECHA: '',
    VIG_DETERMINADAS: '',
    NOTIFICADO_DEVUELTO: '',
    BUSQUEDA: '',
    TOTAL_DETERMINADO: ''

  };
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_historico(add_historico): Observable<any> {
    let params = JSON.stringify(add_historico);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'historicos', params, { headers: headers });

}
list_historico(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'historicos', { headers: headers });

}

 edit_historico(historicoId, upd_historico): Observable<any> {
    let params = JSON.stringify(upd_historico);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.put(this.url + 'historicos/'+historicoId, params, { headers: headers });
}


list_one_historico(historicoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'historicos/'+historicoId, {headers:headers});
}

delete_historico(historicoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.delete(this.url+'historicos/'+historicoId, {headers:headers});
}
}