import { Component, ElementRef, ViewChild } from '@angular/core';
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


  carga: boolean = false;
  seRegistro: boolean = false;
  terminos: boolean = false;
  huboError: boolean = false;
  mostrarError: boolean = false;
  captcha: boolean = false;
  recuerdame: boolean = false;

  placeholderEmail = 'Escribe tu email aqui';


  @ViewChild('personaHtml') componente!: ElementRef;
  @ViewChild('contenedorCarga') cargador!: ElementRef;
  @ViewChild('errorHtml') errorHtml!: ElementRef;
  @ViewChild('errorContenedor') errorContenedor!: ElementRef;

  datos: any
  placeholderPassword = "Escribe tu contraseña aqui"

  constructor(private router: Router, private api: ApiService) { }

  Home() {
    this.router.navigate(["home"]);
  }

  Backup() {
    this.router.navigate(["backup"])
  }

  Signin() {
    this.router.navigate(["signin"]);
  }


  cerrarCarga() {
    this.cargador.nativeElement.classList.add('salida')
    console.log(1)
    setTimeout(() => {
      console.log(2)
      this.carga = false; // Desactiva la carga al completar
    }, 1000)
  }

  cerrarError() {
    this.mostrarError = false;
    setTimeout(() => {
      this.huboError = false;
    }, 1000)
  }


  borrarUsuarioLocal() {
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


  ngOnInit(){
    console.log(localStorage.getItem('user'))
    const userString =localStorage.getItem('user')
    if(userString != null){
      const userObject = JSON.parse(userString);
      this.api.existEmail(userObject.usuarioCorreo).subscribe({
        next: (respuesta) => {
          if (respuesta == true) {
            this.seRegistro = true;
            const nombreUsuario = userObject.usuarioNombre
            console.log("final",this.api.existEmail(userObject.usuarioCorreo))
            this.loginVisual(nombreUsuario)
          } else {
            console.log("final",this.api.existEmail(userObject.usuarioCorreo))
            localStorage.removeItem('user')
          }
        },
        error: (err) => {
          console.error("Error al verificar el correo:", err);
          localStorage.removeItem('user')
        }
      });

    }
  }
  onSubmit(): void {

    let usuario = {
      "usuarioNombre": "",
      "usuarioApellido": "",
      "usuarioCorreo": this.email,
      "usuarioPassword": this.password,
      "usuarioRol": "cliente"
    }

    this.carga = true;

    if (this.api.existEmail(this.email)) {
      this.api.loginUser(usuario).subscribe({
        next: response => {
          console.log('inicio exitoso', response.status)
          console.log('respuesta ',response)
          switch (response.status) {
            case 202: {
              this.cerrarCarga()
              console.log(response)
              if(this.recuerdame){
                console.log(response.body)
                localStorage.setItem('user', JSON.stringify(response.body))
                console.log(localStorage.getItem('user'))
              }else{
                sessionStorage.setItem('user', JSON.stringify(response.body))
               console.log("sesionLocal", sessionStorage.getItem('user'))
              }
              this.loginVisual(usuario.usuarioNombre)
              break
            }
            case 401: {
              this.cerrarCarga()
              this.errorVisual(response.body)
              console.log(response,"resonacn")
              break
            }
            case 404: {
              this.cerrarCarga()
              this.errorVisual(response.body)
              console.log(response)
            }
          }

        },
        error: error => {
          console.log(error.status)
          console.error('error durante el inicio: ', error);
        }
      })
    }
    console.log(usuario)
  }

}