import { Component, ElementRef, ViewChild } from '@angular/core';
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
  captcha = false;
  terminos = false;

  recuerdame: boolean = false;
  seRegistro: boolean = false;
  carga: boolean = false;

  datos: any;

  @ViewChild('personaHtml') componente!: ElementRef;
  @ViewChild('contenedorCarga') cargador!: ElementRef;


  constructor(private router: Router, public api: ApiService) { }

  Home() {
    this.router.navigate(["home"]);
  }

  Login() {
    this.router.navigate(["login"]);
  }

  Coinciden(pas1: string, pas2: string): boolean {
    if (pas1 === pas2) {
      return true;
    } else return false
  }

  cerrarCarga() {
    this.cargador.nativeElement.classList.add('salida')
    console.log("paso 1 bien")
    setTimeout(() => {
      console.log("paso 2 bien")

      this.carga = false; // Desactiva la carga al completar
    }, 1000)
  }

  ngOnInit(){
    console.log(localStorage.getItem('user'))
    const userString =localStorage.getItem('user')
    if(userString != null){
      this.seRegistro = true;
      const userObject = JSON.parse(userString);
      this.loginVisual(userObject)
    }
  }

  borrarUsuarioLocal(){
    console.log(localStorage.getItem('user'))
    localStorage.removeItem('user')
    console.log(localStorage.getItem('user'))
  }

  loginVisual(nombr: string) {
    this.seRegistro = true;
    setTimeout(() => {
      this.componente.nativeElement.innerHTML += `${nombr}`
      setTimeout(() => {
        this.seRegistro = false;
        this.Home()
      }, 3000)
    }, 200)
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

      this.carga = true;
      console.log(this.carga);

      this.api.existEmail(this.email).subscribe({
        next: (respuesta) => {
          if (respuesta == false) {
            this.api.postUser(usuario).subscribe({
              next: (response) => {
                this.datos = response;
                console.log("Se creó correctamente");
                this.loginVisual(this.nombre);
                if (this.recuerdame) {
                  localStorage.setItem('user', JSON.stringify(usuario))
                  console.log('login exitoso', localStorage.getItem('user'))
                }
              },
              error: (err) => {
                console.error("Error al crear el usuario:", err);
              },
              complete: () => {
                this.cerrarCarga()
              }
            });
          } else {
            console.log("El correo ya existe");
            this.cerrarCarga()
          }
        },
        error: (err) => {
          console.error("Error al verificar el correo:", err);
          this.cerrarCarga()
        }
      });
    } else {
      console.log("Las contraseñas no coinciden");
    }
  }
}
