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
      if(localStorage.getItem('user') == 'CONTRIBUYENTE'){
        return true;
    }else{
        this._router.navigate(['/']);
        return false;
    }
    } catch (error) {
      console.log("erda papa")
      this._router.navigate(['/register']);
        return false;
    }
    
    
  }


}