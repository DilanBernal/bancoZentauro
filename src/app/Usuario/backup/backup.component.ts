import { Component } from '@angular/core';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrl: './backup.component.css'
})
export class BackupComponent {

  onSubmitCon() {
    const email = form.value.email;

    console.log('Correo de recuperación enviado a:', email);
    alert('Hemos enviado un enlace de recuperación a tu correo electrónico.');
  }
}
