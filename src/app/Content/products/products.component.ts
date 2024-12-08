import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable, map } from 'rxjs';

interface Product {
  productoId: number,
  productoIdImagen: number;
  productoNombre: string;
  productoDescripcion: string;
  imageUrl?: string;  // Añadimos una propiedad para almacenar la URL de la imagen
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private router: Router, 
    public api: ApiService
  ) {}

  tarjetaEstudiantes() {
    this.router.navigate(["estudiantes"]);
  }

  ngOnInit() {
    this.loading = true;
    this.api.getAllProducts().subscribe({
      next: (data: any) => {
        // Mapeamos los productos y obtenemos las URLs de imagen
        this.products = data.body.map((product: Product) => {
          // Creamos un Observable para la URL de imagen
          const imageUrlObservable = this.api.getUrlImg(product.productoIdImagen).pipe(
            map(response => response.img_url || '')  // Extraemos la URL de la respuesta
          );

          // Suscribimos para obtener la URL
          imageUrlObservable.subscribe(
            imageUrl => {
              product.imageUrl = "http://localhost:3000/"+imageUrl;
            },
            error => {
              console.error(`Error obteniendo imagen para producto ${product.productoNombre}:`, error);
              product.imageUrl = '';  // URL por defecto en caso de error
            }
          );

          return product;
        });
        this.loading = false;
      },
      error: (err) => {
        this.error = 'No se pudieron cargar los productos';
        this.loading = false;
        console.error('Error al cargar productos:', err);
      }
    });
  }
}