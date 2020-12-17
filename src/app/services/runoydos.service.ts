import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class RunoydosService {
  public url: string;
  public selected = {
    _id: null,
    reolucion_no: '',
    propietario: '',
    referencia_catastral: '',
    no_expediente: '',
    fecha: '',
    direccion: '',
    ciudad: '',
    vigencias: '',
    matricula: '',
    cedula: ''

  };
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_runoydos(add_runoydos): Observable<any> {
    let params = JSON.stringify(add_runoydos);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'resolucionunoydos', params, { headers: headers });

}
list_runoydos(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'resolucionunoydos', { headers: headers });

}

 edit_runoydos(runoydosId, upd_runoydos): Observable<any> {
    let params = JSON.stringify(upd_runoydos);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.put(this.url + 'resolucionunoydos/'+runoydosId, params, { headers: headers });
}


list_one_runoydos(runoydosId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'resolucionunoydos/'+runoydosId, {headers:headers});
}

list_byuser_runoydos(runoydosId): Observable<any>{

  let headers = new HttpHeaders({ 'Content-Type': 'application/json'
          
  });
  return this.http.get(this.url+'resolucionunoydos/users/'+runoydosId, {headers:headers});
}

delete_runoydos(runoydosId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.delete(this.url+'resolucionunoydos/'+runoydosId, {headers:headers});
}
}