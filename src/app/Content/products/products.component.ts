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
  ) { }

  tarjetaEstudiantes() {
    this.router.navigate(["estudiantes"]);
  }

  ngOnInit() {
    this.loading = true;
  
    if (sessionStorage.getItem('user') != null) {
      this.api.getAllProducts().subscribe({
        next: (data: any) => {
          const productObservables = data.body.map((product: Product) => {
            // Creamos un Observable para la URL de imagen
            return this.api.getUrlImg(product.productoIdImagen).pipe(
              map(response => response.img_url || ''),
              catchError(error => {
                console.error(`Error obteniendo imagen para producto ${product.productoNombre}:`, error);
                return of(''); // En caso de error, devolvemos una cadena vacía
              })
            );
          });
  
          // Usamos forkJoin para esperar a que todas las solicitudes de imágenes se resuelvan
          forkJoin<string[]>(productObservables).subscribe(
            (imageUrls: string[]) => {
              // Asignamos la URL de imagen a cada producto
              data.body.forEach((product: Product, index: number) => {
                product.imageUrl = imageUrls[index] ? "http://localhost:3000/" + imageUrls[index] : 'assets/default-product.png';
              });
              this.products = data.body;
              sessionStorage.setItem('products', JSON.stringify(this.products));  // Guardamos todos los productos
              this.loading = false;
            },
            (error) => {
              console.error('Error al obtener las imágenes:', error);
              this.error = 'Error al obtener las imágenes de los productos';
              this.loading = false;
            }
          );
        },
        error: (err) => {
          this.error = 'No se pudieron cargar los productos';
          this.loading = false;
          console.error('Error al cargar productos:', err);
        }
      });
    } else {
      // Si no hay sesión de usuario, cargamos los productos desde sessionStorage
      const storedProducts = sessionStorage.getItem('products');
      if (storedProducts) {
        this.products = JSON.parse(storedProducts);
        this.loading = false;
      }
    }
  }
  
  // ngOnInit() {
  //   this.loading = true;
  //   if (sessionStorage.getItem('user') != null) {
  //     this.api.getAllProducts().subscribe({
  //       next: (data: any) => {
  //         // Mapeamos los productos y obtenemos las URLs de imagen
  //         this.products = data.body.map((product: Product) => {
  //           // Creamos un Observable para la URL de imagen
  //           const imageUrlObservable = this.api.getUrlImg(product.productoIdImagen).pipe(
  //             map(response => response.img_url || '')  // Extraemos la URL de la respuesta
  //           );

  //           // Suscribimos para obtener la URL
  //           imageUrlObservable.subscribe(
  //             imageUrl => {
  //               product.imageUrl = "http://localhost:3000/" + imageUrl;
  //             },
  //             error => {
  //               console.error(`Error obteniendo imagen para producto ${product.productoNombre}:`, error);
  //               product.imageUrl = 'Error.png';  // URL por defecto en caso de error
  //             }
  //           );
  //           sessionStorage.setItem('products', JSON.stringify(product))
  //           return product;
  //         });
  //         this.loading = false;
  //       },
  //       error: (err) => {
  //         this.error = 'No se pudieron cargar los productos';
  //         this.loading = false;
  //         console.error('Error al cargar productos:', err);
  //       }
  //     });
  //   }
  // }
}