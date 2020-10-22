import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SEARCH } from "./global";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url: string;
  constructor(private http: HttpClient)
   { 
     this.url = SEARCH.url;
   }

   login(data): Observable<any>{
    return this.http.post(this.url+"auth", data);
   }
}