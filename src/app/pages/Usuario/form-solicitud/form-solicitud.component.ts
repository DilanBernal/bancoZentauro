import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
@Component({
  selector: 'form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrl: './form-solicitud.component.css',
  standalone: false
})
export class FormSolicitudComponent {
  constructor(private api: ApiService, private route: ActivatedRoute, private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('es'); // Establece el idioma por defecto
  }


  // Método para cambiar el idioma
  changeLanguage(lang: string) {
    this.translate.use(lang); // Cambia el idioma
  }
  onSubmit(): void {

  }
}
