import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable, map } from 'rxjs';

interface Product {
  productoId: number;
  productoIdImagen: number;
  productoNombre: string;
  productoDescripcion: string;
  imageUrl?: string;  // Añadimos una propiedad para almacenar la URL de la imagen
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  error:boolean = false;
  loading:boolean = false;

  constructor(private router:Router){}

  productDetail(id: number) {
    this.router.navigate(["productos", "product-detail", 'Tarjeta estuiantes']);
  }

  tarjetaPlus(){
    this.router.navigate(["plus"]);
  }

  tarjetaPremium(){
    this.router.navigate(["premium"]);
  }

}
