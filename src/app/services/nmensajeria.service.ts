import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class NmensajeriaService {
  public url: string;
  
  public selected = {
    _id: null,
    empresa: '',
    nombre: '',
    direccion: '',
    firma: '',
    id: '',
    cedula: ''
  };
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_nmensajeria(add_nmensajeria): Observable<any> {
    let params = JSON.stringify(add_nmensajeria);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'notificacionmensajeria', params, { headers: headers });

}
list_nmensajeria(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'notificacionmensajeria', { headers: headers });

}

 edit_nmensajeria(nmensajeriaId, upd_nmensajeria): Observable<any> {
   console.log("id------:", nmensajeriaId, upd_nmensajeria)
    let params = JSON.stringify(upd_nmensajeria);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.put(this.url + 'notificacionmensajeria/'+nmensajeriaId, params, { headers: headers });
}


list_one_nmensajeria(nmensajeriaId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'notificacionmensajeria/'+nmensajeriaId, {headers:headers});
}

list_byuser_nmensajeria(userId): Observable<any>{

  let headers = new HttpHeaders({ 'Content-Type': 'application/json'
          
  });
  return this.http.get(this.url+'notificacionmensajeria/users/'+userId, {headers:headers});
}


delete_nmensajeria(nmensajeriaId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.delete(this.url+'notificacionmensajeria/'+nmensajeriaId, {headers});
}
} 