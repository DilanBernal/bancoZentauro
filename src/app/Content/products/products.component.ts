import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';  // Asegúrate de importar el servicio de traducción

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private router: Router, private translate: TranslateService) {
    // Definir el idioma por defecto
    this.translate.setDefaultLang('es');  // Puedes cambiar esto según tu preferencia de idioma
  }

  tarjetaEstudiantes() {
    this.router.navigate(["estudiantes"]);
  }

  tarjetaPlus() {
    this.router.navigate(["plus"]);
  }

  tarjetaPremium() {
    this.router.navigate(["premium"]);
  }

}
