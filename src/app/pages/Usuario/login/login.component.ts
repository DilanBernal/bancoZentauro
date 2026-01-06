import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';
import { CompleteService } from '../../../core/layout/popup/complete/complete.service';
import { LoaderService } from '../../../core/layout/popup/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  recuerdame: boolean = false;
  captcha: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  placeholderEmail = 'Escribe tu email aqui';
  placeholderPassword = "Escribe tu contraseña aqui";

  constructor(
    private router: Router,
    private api: ApiService,
    private authService: AuthService,
    public loader: LoaderService,
    public alertC: CompleteService
  ) { }

  ngOnInit() {
    this.checkExistingSession();
  }

  private checkExistingSession() {
    const userString = sessionStorage.getItem('user') || localStorage.getItem('user');
    if (userString) {
      const userObject = JSON.parse(userString);
      this.verifyExistingUser(userObject);
    }
  }

  private verifyExistingUser(userObject: any) {
    this.api.existEmail(userObject.usuarioCorreo).subscribe({
      next: (respuesta) => {
        if (respuesta) {
          this.alertC.activarLoader(
            'Sesión existente',
            `Bienvenido/a ${userObject.usuarioNombre}`,
            true
          );
          this.router.navigate(['/home']);
        } else {
          this.authService.clearStoredUser();
        }
      },
      error: (err) => {
        console.error("Error al verificar el correo:", err);
        this.authService.clearStoredUser();
      }
    });
  }

  onSubmit(): void {
    // Validaciones básicas
    if (!this.email || !this.password || !this.captcha) {
      this.errorMessage = 'Por favor complete todos los campos';
      return;
    }

    // Preparar datos de usuario
    const usuario = {
      "usuarioNombre": "",
      "usuarioApellido": "",
      "usuarioCorreo": this.email,
      "usuarioPassword": this.password,
      "usuarioRol": "cliente"
    };

    this.isLoading = true;
    this.loader.activarLoader();

    // Verificar existencia de email
    this.api.existEmail(this.email).subscribe({
      next: (emailExists) => {
        if (emailExists) {
          this.loginUser(usuario);
        } else {
          this.handleLoginError('El correo electrónico no está registrado');
        }
      },
      error: (err) => {
        this.handleLoginError('Error al verificar el correo electrónico');
      }
    });
  }

  private loginUser(usuario: any) {
    this.api.loginUser(usuario).subscribe({
      next: (response) => {
        this.handleLoginResponse(response);
      },
      error: (error) => {
        this.handleLoginError('Error de conexión. Intente nuevamente.');
      },
      complete: () => {
        this.isLoading = false;
        this.loader.cerrarLoader();
      }
    });
  }

  private handleLoginResponse(response: any) {
    switch (response.status) {
      case 202: {
        // Inicio de sesión exitoso
        if (this.recuerdame) {
          localStorage.setItem('user', JSON.stringify(response.body));
        } else {
          sessionStorage.setItem('user', JSON.stringify(response.body));
        }

        this.alertC.activarLoader(
          'Inicio de sesión exitoso',
          `Bienvenido/a ${response.body.usuarioNombre}`,
          true
        );
        this.router.navigate(['/home']);
        break;
      }
      case 401: {
        this.handleLoginError('Contraseña o correo incorrectos');
        break;
      }
      case 404: {
        this.handleLoginError('No se pudo encontrar al usuario');
        break;
      }
      default: {
        this.handleLoginError('Error desconocido al iniciar sesión');
      }
    }
  }

  private handleLoginError(message: string) {
    this.isLoading = false;
    this.loader.cerrarLoader();
    this.errorMessage = message;
    this.alertC.activarLoader('ERROR!', message, false);
  }

  // Métodos de navegación
  Home() {
    this.router.navigate(["home"]);
  }

  Backup() {
    this.router.navigate(["backup"]);
  }

  Signin() {
    this.router.navigate(["signin"]);
  }
}