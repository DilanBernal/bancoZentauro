import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';

interface Product {
  productoId: number,
  productoIdImagen: number;
  productoNombre: string;
  productoDescripcion: string;
  imageUrl?: string;  // Añadimos una propiedad para almacenar la URL de la imagen
}

interface ApiResponse<T> {
  body: T[];
  status: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private router: Router,
    public api: ApiService
  ) { }


  infoComponent(id:any){
    this.router.navigate([`products/${id}`])
  }
  
  ngOnInit() {
    this.loading = true;

    this.api.getAllProductsJson().then ((products) => {
      this.loading = false
      if(products.length !==0){
        this.products = products
      }else if(products.length == 0){

        this.error = 'No se pudieron encontrar productos'
      }
    })
    .catch((error) => {
      this.error = error.message
      this.loading = false
    })

  }
  
}