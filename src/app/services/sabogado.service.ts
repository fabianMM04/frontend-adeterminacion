import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class SabogadoService {
  public url: string;
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_sabogado(add_sabogado): Observable<any> {
    let params = JSON.stringify(add_sabogado);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'sabogado', params, { headers: headers });

}
list_sabogado(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'sabogado', { headers: headers });

}

 edit_sabogado(sabogadoId, upd_sabogado): Observable<any> {
    let params = JSON.stringify(upd_sabogado);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.put(this.url + 'sabogado/'+sabogadoId, params, { headers: headers });
}


list_one_sabogado(sabogadoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'sabogado/'+sabogadoId, {headers:headers});
}


delete_sabogado(sabogadoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.delete(this.url+'sabogado/'+sabogadoId, {headers:headers});
}
}