import { Component } from '@angular/core';

@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrl: './form-solicitud.component.css'
})
export class FormSolicitudComponent {

  onSubmit():void{
    console.log("Formulario Enviado")
  }
}
