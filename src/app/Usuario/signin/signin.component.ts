import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password = '';
  passwordConfirm = '';

  datos: any;
  constructor(private router: Router, public api: ApiService) { }

  Home() {
    this.router.navigate(["home"]);
  }

  Login(){
    this.router.navigate(["login"]);
  }

  Coinciden(pas1: string, pas2: string): boolean {
    if (pas1 === pas2) {
      return true;
    } else return false
  }

  onSubmitAccount() {

    let usuario = {
      "usuarioNombre": this.nombre,
      "usuarioApellido": this.apellido,
      "usuarioCorreo": this.email,
      "usuarioPassword": this.password,
      "usuarioRol": "cliente"
    }
    if (this.Coinciden(this.password, this.passwordConfirm)) {
      this.api.existEmail(this.email).subscribe({
        next: (respuesta) => {
          if (respuesta == false) {
            this.api.postUser(usuario).subscribe((response) => {
              this.datos = response;
              console.log("se creo correctamente");
            })
          }
        }
      })
    } else console.log("no coinciden");
  }
}
