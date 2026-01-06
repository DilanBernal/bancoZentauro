import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'] // Cambié styleUrl a styleUrls
    ,
    standalone: false
})
export class HomeComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es'); // Establece el idioma por defecto
  }

  // Método para cambiar el idioma
  changeLanguage(lang: string) {
    this.translate.use(lang); // Cambia el idioma
  }
}
