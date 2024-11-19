import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

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
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
}