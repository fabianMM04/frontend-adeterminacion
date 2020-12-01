import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class SarchivoService {
  public url: string;
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   add_sarchivo(add_sarchivo): Observable<any> {
    let params = JSON.stringify(add_sarchivo);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.post(this.url + 'sarchivo', params, { headers: headers });

}
list_sarchivo(): Observable<any> {
  
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.get(this.url + 'sarchivo', { headers: headers });

}

 edit_sarchivo(sarchivoId, upd_sarchivo): Observable<any> {
    let params = JSON.stringify(upd_sarchivo);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });

    return this.http.put(this.url + 'sarchivo/'+sarchivoId, params, { headers: headers });
}


list_one_sarchivo(sarchivoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.get(this.url+'sarchivo/'+sarchivoId, {headers:headers});
}


delete_sarchivo(sarchivoId): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json'
            
    });
    return this.http.delete(this.url+'sarchivo/'+sarchivoId, {headers:headers});
}
}