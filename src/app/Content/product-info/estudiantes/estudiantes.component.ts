import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']  // Corregido de styleUrl a styleUrls
})
export class EstudiantesComponent {

  constructor(private router: Router, private translate: TranslateService) {
    // Establecer idioma por defecto
    this.translate.setDefaultLang('es');  // Establece el idioma predeterminado (español)
  }

  // Cambiar el idioma
  changeLanguage(lang: string) {
    this.translate.use(lang);  // Cambia el idioma según el parámetro lang
  }

  // Método para redirigir a la página de solicitud
  solicitudTarjetaEstudiantes() {
    this.router.navigate(["form-solicitud"]);  // Navega a la página de solicitud
  }
}
