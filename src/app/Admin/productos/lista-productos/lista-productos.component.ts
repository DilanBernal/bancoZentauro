import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', vecesAdquirido: 10, tipo: 'Electrónica' },
    { nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', vecesAdquirido: 5, tipo: 'Ropa' },
    { nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', vecesAdquirido: 20, tipo: 'Alimentos' }
  ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');  // Cambia 'es' por 'en' si deseas usar inglés
  }

  ngOnInit(): void {
    // Aquí puedes cargar idiomas adicionales o hacer cambios dinámicos si es necesario
  }
}
