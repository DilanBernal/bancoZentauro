import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']  // Cambié styleUrl a styleUrls
})
export class PlusComponent {

  constructor(private router: Router) {}

  // Cambié el nombre del método para que coincida con el HTML
  solicitudTarjetaPlus() {
    this.router.navigate(["form-solicitud"]);
  }
}
