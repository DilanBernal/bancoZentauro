import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrl: './form-solicitud.component.css'
})
export class FormSolicitudComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es'); // Establece el idioma por defecto
  }

  // Método para cambiar el idioma
  changeLanguage(lang: string) {
    this.translate.use(lang); // Cambia el idioma
  }
  onSubmit():void{
    console.log("Formulario Enviado")
  }
}
