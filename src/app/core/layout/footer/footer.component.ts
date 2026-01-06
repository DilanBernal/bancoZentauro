import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
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
