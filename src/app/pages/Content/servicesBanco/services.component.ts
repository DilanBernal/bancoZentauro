import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // Importa el servicio de traducción

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css'] // Corrección en `styleUrls`
    ,
    standalone: false
})
export class ServicesComponent {
  currentLanguage: string; // Variable para almacenar el idioma actual

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang || 'en'; // Configura el idioma inicial
  }

  // Método para cambiar el idioma
  changeLanguage(language: string): void {
    this.translate.use(language); // Cambia el idioma
    this.currentLanguage = language; // Actualiza la variable del idioma actual
  }
}
