import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token;
  public user;
  formGroup: FormGroup;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private authService: LoginService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      correo: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required])
    })
  }

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(response => {
        if( response.token){
          console.log("holi", response);
          this.token = response.token;
          this.user = response.user;
          localStorage.setItem('token', this.token );
          localStorage.setItem('user', this.user.tipo );
          localStorage.setItem('id', this.user.identificacion );
          this._router.navigate(['menu']);
        }
      })
    }
  }

}
