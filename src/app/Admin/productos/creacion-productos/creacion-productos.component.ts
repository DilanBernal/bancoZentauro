import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion-productos',
  templateUrl: './creacion-productos.component.html',
  styleUrl: './creacion-productos.component.css'
})
export class CreacionProductosComponent {

  nombreProducto = ''
  descripcionProduco = ''
  imagen:any =''

  public constructor(private router:Router) {

  }

  Back(){
    this.router.navigate([this.Back]);
  }
}
