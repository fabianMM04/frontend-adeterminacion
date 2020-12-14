import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class ScontribuyenteService {
  public url: string;

  public selected = {
    _id: null,
    ciudad: '',
    fecha: '',
    propietario: '',
    referencia_catastral: '',
    vigencias: '',
    matricula: '',
    notificacion: '',
    codigo_no: ''

  };
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_scontribuyente(add_scontribuyente): Observable<any> {
    add_scontribuyente.usuario = localStorage.getItem('id');
    let params = JSON.stringify(add_scontribuyente);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'scontribuyente', params, { headers: headers });

}
list_scontribuyente(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'scontribuyente', { headers: headers });

}

 edit_scontribuyente(scontribuyenteId, upd_scontribuyente): Observable<any> {
    let params = JSON.stringify(upd_scontribuyente);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.put(this.url + 'scontribuyente/'+scontribuyenteId, params, { headers: headers });
}


list_one_scontribuyente(scontribuyenteId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'scontribuyente/'+scontribuyenteId, {headers:headers});
}

list_byuser_scontribuyente(scontribuyenteId): Observable<any>{

  let headers = new HttpHeaders({ 'Content-Type': 'application/json'
          
  });
  return this.http.get(this.url+'scontribuyente/users/'+scontribuyenteId, {headers:headers});
}

delete_scontribuyente(scontribuyenteId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.delete(this.url+'scontribuyente/'+scontribuyenteId, {headers:headers});
}
}