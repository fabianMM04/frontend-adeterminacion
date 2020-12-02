import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class ResolucionService {
  public url: string;

  public selected = {
    _id: null,
    resolucion_no: '',
    referencia_catastral: '',
    direccion: '',
    propietario: '',
    valor: '',
    vigencias: '',
    fecha: '',
    notificacion: '',
    ciudad: ''

  };
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_resolucion(add_resolucion): Observable<any> {
    let params = JSON.stringify(add_resolucion);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'resoluciones', params, { headers: headers });

}
list_resolucion(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'resoluciones', { headers: headers });

}

 edit_resolucion(resolucionId, upd_resolucion): Observable<any> {
    let params = JSON.stringify(upd_resolucion);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.put(this.url + 'resoluciones/'+resolucionId, params, { headers: headers });
}


list_one_resolucion(resolucionId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'resoluciones/'+resolucionId, {headers:headers});
}


delete_resolucion(resolucionId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.delete(this.url+'resoluciones/'+resolucionId, {headers:headers});
}
}