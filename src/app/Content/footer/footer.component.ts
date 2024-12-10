import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es'); // Establece el idioma por defecto
  }

  // Método para cambiar el idioma
  changeLanguage(lang: string) {
    this.translate.use(lang); // Cambia el idioma
  }
}
