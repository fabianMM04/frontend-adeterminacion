import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class RembargoService {
  public url: string;

  public selected = {
    _id: null,
    reolucion_no: '',
    no_expediente: '',
    fecha: '',
    propietario: '',
    cedula: '',
    referencia_catastral: '',
    direccion: '',
    matricula: '',
    valor: ''

  };
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_rembargo(add_rembargo): Observable<any> {
    add_rembargo.usuario = localStorage.getItem('id');
    let params = JSON.stringify(add_rembargo);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'resolucionembargo', params, { headers: headers });

}
list_rembargo(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'resolucionembargo', { headers: headers });

}

 edit_rembargo(rembargoId, upd_rembargo): Observable<any> {
    let params = JSON.stringify(upd_rembargo);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.put(this.url + 'resolucionembargo/'+rembargoId, params, { headers: headers });
}


list_one_rembargo(rembargoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'resolucionembargo/'+rembargoId, {headers:headers});
}

list_byuser_rembargo(rembargoId): Observable<any>{

  let headers = new HttpHeaders({ 'Content-Type': 'application/json'
          
  });
  return this.http.get(this.url+'resolucionembargo/users/'+rembargoId, {headers:headers});
}

delete_rembargo(rembargoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.delete(this.url+'resolucionembargo/'+rembargoId, {headers:headers});
}
}