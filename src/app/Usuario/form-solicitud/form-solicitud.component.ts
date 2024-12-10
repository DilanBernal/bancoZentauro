import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrl: './form-solicitud.component.css'
})
export class FormSolicitudComponent {
  constructor(private api:ApiService, private route:ActivatedRoute,private translate: TranslateService, private router:Router) {
    this.translate.setDefaultLang('es'); // Establece el idioma por defecto
  }

  
  // Método para cambiar el idioma
  changeLanguage(lang: string) {
    this.translate.use(lang); // Cambia el idioma
  }
  onSubmit():void{
    
  }
}
