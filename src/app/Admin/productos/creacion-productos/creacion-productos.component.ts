import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion-productos',
  templateUrl: './creacion-productos.component.html',
  styleUrls: ['./creacion-productos.component.css'] // Asegúrate de que el nombre sea styleUrls y no styleUrl
})
export class CreacionProductosComponent {

  nombreProducto = '';
  descripcionProducto = ''; // Corregí el nombre de la variable
  imagen: any = '';

  constructor(private router: Router) { }

  // Método para volver a la página anterior o a la ruta específicav
  Back() {
    this.router.navigate(['/ruta-anterior']); // Reemplaza '/ruta-anterior' por la ruta que deseas
  }
}
