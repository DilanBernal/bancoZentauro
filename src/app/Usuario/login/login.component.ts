import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LoaderService } from '../../Content/popup/loader/loader.service';
import { CompleteComponent } from '../../Content/popup/complete/complete.component';
import { CompleteService } from '../../Content/popup/complete/complete.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombreM: string = ''
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
  placeholderPassword = "Escribe tu contraseña aqui"


  @ViewChild('personaHtml') componente!: ElementRef;
  datos: any

  constructor(private router: Router, private api: ApiService, public loader: LoaderService, public alertC: CompleteService) { }

  Home() {
    this.router.navigate(["home"]);
  }

  Backup() {
    this.router.navigate(["backup"])
  }

  Signin() {
    this.router.navigate(["signin"]);
  }

  borrarUsuarioLocal() {
    console.log(localStorage.getItem('user'))
    localStorage.removeItem('user')
    console.log(localStorage.getItem('user'))
  }


  ngOnInit() {
    console.log(localStorage.getItem('user'))
    const userString = sessionStorage.getItem('user')
    if (userString != null) {
      const userObject = JSON.parse(userString);
      this.api.existEmail(userObject.usuarioCorreo).subscribe({
        next: (respuesta) => {
          if (respuesta == true) {
            this.seRegistro = true;
            const nombreUsuario = userObject.usuarioNombre
            this.alertC.activarLoader('Se inicio sesion correctamete', `Bienvenido/a ${nombreUsuario}`, true)
          } else {
            console.log("final", this.api.existEmail(userObject.usuarioCorreo))
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
    this.loader.activarLoader()

    if (this.api.existEmail(this.email)) {
      this.api.loginUser(usuario).subscribe({
        next: response => {
          switch (response.status) {
            case 202: {
              this.loader.cerrarLoader()
              if (this.recuerdame) {
                localStorage.setItem('user', JSON.stringify(response.body))
                console.log(localStorage.getItem('user'))
              } else {
                sessionStorage.setItem('user', JSON.stringify(response.body))
              }

              this.loader.cerrarLoader()
              this.nombreM = usuario.usuarioNombre              
              this.alertC.activarLoader('Se inicio sesion correctamete', `Bienvenido/a ${this.nombreM}`, true)
              break
            }
            case 401: {
              
              this.alertC.activarLoader('ERROR!', `Contraseña o correo incorrectos`, false)
              console.log(response, "resonacn")
              break
            }
            case 404: {
              this.alertC.activarLoader('ERROR!', `No se pudo encontrar al usuario`, false)
              console.log(response)
            }
          }

        },
        error: error => {
          this.loader.cerrarLoader()
        },
        complete: (() => {
          this.loader.cerrarLoader()
        })
      })
    }
    console.log(usuario)
  }

}