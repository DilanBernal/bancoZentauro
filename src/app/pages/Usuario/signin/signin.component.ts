import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api.service';
import { AuthService } from '../../../core/services/auth.service';
import { CompleteService } from '../../../core/layout/popup/complete/complete.service';
import { LoaderService } from '../../../core/layout/popup/loader/loader.service';

interface UserRegistration {
  usuarioNombre: string;
  usuarioApellido: string;
  usuarioCorreo: string;
  usuarioPassword: string;
  usuarioRol: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: false
})
export class SigninComponent implements OnInit {
  registrationForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  terminos: boolean = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private loaderService: LoaderService,
    private alertC: CompleteService
  ) {
    this.registrationForm = this.createRegistrationForm();
  }

  Home() {
    this.router.navigate(['home'])
  }

  Login() {
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
    this.checkExistingSession();
  }

  private createRegistrationForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      apellido: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordStrengthValidator
      ]],
      passwordConfirm: ['', [Validators.required]],
      terminos: [false, Validators.requiredTrue],
      recuerdame: [false]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  private passwordStrengthValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    const hasNumber = /\d/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

    const passwordValid = hasNumber && hasUpper && hasLower && hasSpecial && value.length >= 8;

    return passwordValid ? null : { 'weakPassword': true };
  }

  private passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password');
    const confirmPassword = group.get('passwordConfirm');

    return password && confirmPassword && password.value === confirmPassword.value
      ? null
      : { 'passwordMismatch': true };
  }

  private checkExistingSession(): void {
    const existingUser = this.authService.getStoredUser();
    if (existingUser) {
      this.verifyExistingUser(existingUser);
    }
  }

  private verifyExistingUser(user: UserRegistration): void {
    this.apiService.existEmail(user.usuarioCorreo)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (exists) => {
          if (exists) {
            this.authService.setCurrentUser(user);
            this.router.navigate(['/home']);
          } else {
            this.authService.clearStoredUser();
          }
        },
        error: (err) => {
          console.error('Error verificando usuario:', err);
          this.authService.clearStoredUser();
        }
      });
  }

  onSubmit(): void {

    this.loaderService.activarLoader()
    if (this.registrationForm.invalid) {
      this.markFormGroupTouched(this.registrationForm);
      return;
    }

    const formValues = this.registrationForm.value;
    const userData: UserRegistration = {
      usuarioNombre: formValues.nombre,
      usuarioApellido: formValues.apellido,
      usuarioCorreo: formValues.email,
      usuarioPassword: formValues.password,
      usuarioRol: 'cliente'
    };

    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.existEmail(userData.usuarioCorreo)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (emailExists) => {
          if (!emailExists) {
            this.registerUser(userData, formValues.recuerdame);
          } else {
            this.errorMessage = 'El correo electrónico ya está registrado';
            this.alertC.activarLoader('Error', this.errorMessage, false)
          }
        },
        error: (err) => {
          this.errorMessage = 'Error al verificar el correo electrónico';
          console.error(err);
        }
      });
  }

  private registerUser(userData: UserRegistration, rememberMe: boolean): void {
    this.isLoading = true;
    this.apiService.registerUser(userData)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: () => {
          if (rememberMe) {
            this.authService.storeUserLocally(userData);
          } else {
            this.authService.storeUserInSession(userData);
          }
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.errorMessage = 'Error al registrar el usuario';
          console.error(err);
        }
      });
  }

  // Utility method to mark all controls as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Convenience getters for template
  get nombre() { return this.registrationForm.get('nombre'); }
  get apellido() { return this.registrationForm.get('apellido'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }
  get passwordConfirm() { return this.registrationForm.get('passwordConfirm'); }
}