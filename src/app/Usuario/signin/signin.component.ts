import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  onSubmitAccount() {
    if (form.value.password !== form.value.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    console.log('Formulario válido y enviado:', form.value);
  }
}
