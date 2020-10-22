import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private registerService: RegisterService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required])

    })
  }

  registrar(){
    if(this.formGroup.valid){
      this.registerService.registrar(this.formGroup.value).subscribe(response => {
        if( response.user){
          
          this._router.navigate(['']);
        }
      })
    }
  }
}
