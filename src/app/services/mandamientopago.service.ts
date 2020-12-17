import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class MandamientoPagoService {
  public url: string;
  
  public selected = {
    _id: null,
    reolucion_no: '',
    no_expediente: '',
    fecha: '',
    direccion: '',
    ciudad: '',
    referencia_catastral: '',
    propietario: '',
    vigencias: '',
    valor: '',
    cdt: '',
    mandamiento_no: '',
    notificacion: '',
    cedula: ''

  };
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_mandamientopago(add_mandamientopago): Observable<any> {
    let params = JSON.stringify(add_mandamientopago);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'mandamientopago', params, { headers: headers });

}
list_mandamientopago(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'mandamientopago', { headers: headers });

}

 edit_mandamientopago(mandamientopagoId, upd_mandamientopago): Observable<any> {
   console.log("id------:", mandamientopagoId, upd_mandamientopago)
    let params = JSON.stringify(upd_mandamientopago);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.put(this.url + 'mandamientopago/'+mandamientopagoId, params, { headers: headers });
}


list_one_mandamientopago(mandamientopagoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'mandamientopago/'+mandamientopagoId, {headers:headers});
}

list_byuser_mandamientopago(userId): Observable<any>{

  let headers = new HttpHeaders({ 'Content-Type': 'application/json'
          
  });
  
  return this.http.get(this.url+'mandamientopago/users/'+userId, {headers:headers});
}


delete_mandamientopago(mandamientopagoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.delete(this.url+'mandamientopago/'+mandamientopagoId, {headers});
}
} 