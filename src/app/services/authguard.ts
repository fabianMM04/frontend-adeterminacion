import { Injectable } from '@angular/core';
import { Router,  CanActivate } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
     // propiedades privadas del Router, son objeto tipo router

     private _router: Router,
  ) { }

  canActivate(){
    try {
      if(localStorage.getItem('user') == 'CONTRIBUYENTE' || localStorage.getItem('user') == "RECEPCIONISTA" || localStorage.getItem('user') == "ARCHIVO_DETERMINACION" || localStorage.getItem('user') == "ABOGADO"){
        return true;
    }else{
        this._router.navigate(['/']);
        return false;
    }
    } catch (error) {
      this._router.navigate(['/register']);
        return false;
    }
    
    
  }


}