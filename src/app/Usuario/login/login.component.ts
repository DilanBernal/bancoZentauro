import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  placeholderPassword = "Escribe tu contraseña aqui"

  constructor(private router:Router){}

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
    console.log('Formulario enviado');
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);
  }
}