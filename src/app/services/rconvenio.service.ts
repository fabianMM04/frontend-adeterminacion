import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class RconvenioService {
  public url: string;

  public selected = {
    _id: null,
    reolucion_facilidad: '',
    propietario: '',
    no_expediente: '',
    cedula: '',
    referencia_catastral: '',
    valor: '',
    vigencias: '',
    no_cuotas: '',
    pagare_no: '',
    notificacion: '',
    ciudad: ''

  };
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_rconvenio(add_rconvenio): Observable<any> {
    let params = JSON.stringify(add_rconvenio);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'resolucionconvenios', params, { headers: headers });

}
list_rconvenio(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'resolucionconvenios', { headers: headers });

}

 edit_rconvenio(rconvenioId, upd_rconvenio): Observable<any> {
    let params = JSON.stringify(upd_rconvenio);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.put(this.url + 'resolucionconvenios/'+rconvenioId, params, { headers: headers });
}


list_one_rconvenio(rconvenioId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'resolucionconvenios/'+rconvenioId, {headers:headers});
}


delete_rconvenio(rconvenioId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.delete(this.url+'resolucionconvenios/'+rconvenioId, {headers:headers});
}
}