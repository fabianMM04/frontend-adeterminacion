import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class NembargoService {
  public url: string;

  public selected = {
    _id: null,
    reolucion_no: '',
    cdt: '',
    fecha: '',
    matricula: '',
    referencia_catastral: '',
    propietario: '',
    vigencias: '',
    valor: ''

  };
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_nembargo(add_nembargo): Observable<any> {
    let params = JSON.stringify(add_nembargo);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'notificacionembargos', params, { headers: headers });

}
list_nembargo(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'notificacionembargos', { headers: headers });

}

 edit_nembargo(nembargoId, upd_nembargo): Observable<any> {
    let params = JSON.stringify(upd_nembargo);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.put(this.url + 'notificacionembargos/'+nembargoId, params, { headers: headers });
}


list_one_nembargo(nembargoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'notificacionembargos/'+nembargoId, {headers:headers});
}


delete_nembargo(nembargoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.delete(this.url+'notificacionembargos/'+nembargoId, {headers:headers});
}
}