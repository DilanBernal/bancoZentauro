import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  terminos:boolean = false;
  captcha:boolean = false;


  placeholderEmail = 'Escribe tu email aqui';

  datos:any
  placeholderPassword = "Escribe tu contraseña aqui"

  constructor(private router:Router, private api:ApiService){}

  Home(){
    this.router.navigate(["home"]);
  }

  Backup(){
    this.router.navigate(["backup"])
  }

  Signin(){
    this.router.navigate(["signin"]);
  }

  
  onSubmit(): void {

    let usuario = {
      "usuarioNombre": "",
      "usuarioApellido": "",
      "usuarioCorreo": this.email,
      "usuarioPassword": this.password,
      "usuarioRol": "cliente"
    }
    this.api.loginUser(usuario).subscribe({
      next: (respuesta) => {
        if (respuesta == false) {
          this.api.postUser(usuario).subscribe((response) => {
            this.datos = response;
            console.log("se creo correctamente");
          })
        }
      }
    })
    console.log(usuario)
  }

}