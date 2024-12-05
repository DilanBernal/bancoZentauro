import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgForm } from '@angular/forms';

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
  huboError: boolean = false;
  mostrarError: boolean = false;
  carga: boolean = false;

  datos: any;

  @ViewChild('personaHtml') componente!: ElementRef;
  @ViewChild('contenedorCarga') cargador!: ElementRef;
  @ViewChild('errorHtml') errorHtml!: ElementRef;
  @ViewChild('errorContenedor') errorContenedor!: ElementRef;

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
    setTimeout(() => {
      this.carga = false; // Desactiva la carga al completar
    }, 1000)
  }

  cerrarError() {
    this.mostrarError = false;
    setTimeout(() => {
      this.huboError = false;
    }, 1000)
  }

  ngOnInit() {
    console.log(localStorage.getItem('user'))
    const userString = localStorage.getItem('user')
    const userStringSession = sessionStorage.getItem('user')
    if (userString != null && sessionStorage.getItem('user') == null) {
      const userObject = userString !== null ? JSON.parse(userString) : null;
      sessionStorage.setItem('usr', userObject)
      const userObjectSession = userStringSession !== null ? JSON.parse(userStringSession) : null;
      this.api.existEmail(userObjectSession.usuarioCorreo).subscribe({
        next: (respuesta) => {
          if (respuesta == true) {
            this.seRegistro = true;
            const nombreUsuario = userObjectSession.usuarioNombre
            console.log("final", this.api.existEmail(userObjectSession.usuarioCorreo))
            this.registerVisual(nombreUsuario)
          } else {
            console.log("final", this.api.existEmail(userObjectSession.usuarioCorreo))
            localStorage.removeItem('user')
            sessionStorage.removeItem('user')
          }
        },
        error: (err) => {
          console.error("Error al verificar el correo:", err);
          localStorage.removeItem('user')
          sessionStorage.removeItem('user')
        }
      });
    } else if (userString != null) {

      const userObject = userString !== null ? JSON.parse(userString) : null;
      sessionStorage.setItem('usr', userObject)
      const userObjectSession = userStringSession !== null ? JSON.parse(userStringSession) : null;
      this.api.existEmail(userObjectSession.usuarioCorreo).subscribe({
        next: (respuesta) => {
          if (respuesta == true) {
            this.seRegistro = true;
            const nombreUsuario = userObjectSession.usuarioNombre
            console.log("final", this.api.existEmail(userObjectSession.usuarioCorreo))
            this.registerVisual(nombreUsuario)
          } else {
            console.log("final", this.api.existEmail(userObjectSession.usuarioCorreo))
            localStorage.removeItem('user')
            sessionStorage.removeItem('user')
          }
        },
        error: (err) => {
          console.error("Error al verificar el correo:", err);
          localStorage.removeItem('user')
          sessionStorage.removeItem('user')
        }
      });
    }
  }

  borrarUsuarioLocal() {
    console.log(localStorage.getItem('user'))
    localStorage.removeItem('user')
    console.log(localStorage.getItem('user'))
  }

  registerVisual(nombr: string) {
    this.seRegistro = true;
    setTimeout(() => {
      this.componente.nativeElement.innerHTML += `${nombr}`
      setTimeout(() => {
        this.seRegistro = false;
        this.Home()
      }, 2600)
    }, 200)
  }

  errorVisual(error: any) {
    this.huboError = true;
    this.mostrarError = true;
    setTimeout(() => {
      this.errorHtml.nativeElement.innerHTML += `${error}`
      setTimeout(() => {
        this.cerrarError()
      }, 2600)
    }, 200)
  }

  onSubmitAccount(form: NgForm) {

    if (form.controls['email'].invalid) {
      console.error('El correo electrónico es inválido.');
    }
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
                if(form.controls['email'].invalid){
                  this.errorVisual("Ingrese un correo valido")
                  console.log("correo Vallido")
                  console.log("Se creó correctamente");
                  this.registerVisual(this.nombre);
                  if (this.recuerdame) {
                    localStorage.setItem('user', JSON.stringify(usuario))
                    console.log('login exitoso', localStorage.getItem('user'))
                  } else { sessionStorage.setItem('user', JSON.stringify(usuario)); console.log(sessionStorage.getItem('user')) }
                }else console.log("correo Invalido")
              },
              error: (err) => {
                console.error("Error al crear el usuario:", err);
                this.errorVisual(err)
              },
              complete: () => {
                this.cerrarCarga()
                // this.cerrarError()
              }
            });
          } else {
            console.log("El correo ya existe");
            this.cerrarCarga()
            this.errorVisual("El correo ya existe")
            // this.cerrarError()
          }
        },
        error: (err) => {
          console.error("Error al verificar el correo:", err);
          this.cerrarCarga()
          this.errorVisual("Error al verificar el correo" + err)
        }
      });
    } else {
      console.log("Las contraseñas no coinciden");
    }
  }
}
