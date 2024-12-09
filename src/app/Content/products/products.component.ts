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

    var contenidoPruena = this.api.getAllProductsJson().then ((products) => {
      this.products = products
      if(products.length ===0){
        console.log('0 productos')
      }
      return products
    })
    .catch((error) => {
      this.error = error.message
    })

    var contenidoSOlicitud = this.api.getAllSolicitudProduct().then ((solicitudes) => {
      return solicitudes
    })
    .catch((error) => {
      return error
    })
    // console.log(pruebaApi)
    // if (this.areProductsCached()) {
    //   this.loadProductsFromStorage();
    // } else {
    //   this.fetchProductsFromAPI();
    // }
  }
  
  // private areProductsCached(): boolean {
  //   return sessionStorage.getItem('products') != null;
  // }
  
  // private loadProductsFromStorage() {
  //   const storedProducts = sessionStorage.getItem('products');
  //   if (storedProducts) {
  //     this.products = JSON.parse(storedProducts);
  //     console.log("Loaded products from storage:", this.products);
  //   }
  //   this.loading = false;
  // }
  
  // private fetchProductsFromAPI() {
  //   this.api.getAllProducts().subscribe({
  //     next: (data: ApiResponse<Product>) => {
  //       const productObservables = data.body.map(product =>
  //         this.api.getUrlImg(product.productoIdImagen).pipe(
  //           map(response => response.img_url || ''),
  //           catchError(error => {
  //             console.error(`Error fetching image for ${product.productoNombre}:`, error);
  //             return of('Error.png'); // Valor por defecto en caso de error
  //           })
  //         )
  //       );
  
  //       forkJoin(productObservables).subscribe(
  //         (imageUrls: string[]) => {
  //           this.products = data.body.map((product, index) => ({
  //             ...product,
  //             imageUrl: imageUrls[index] ? `http://localhost:3000/${imageUrls[index]}` : 'Error.png',
  //           }));
  //           sessionStorage.setItem('products', JSON.stringify(this.products));
  //           this.loading = false;
  //         },
  //         error => {
  //           console.error('Error fetching product images:', error);
  //           this.error = 'No se pudieron cargar las imágenes de los productos';
  //           this.loading = false;
  //         }
  //       );
  //     },
  //     error: err => {
  //       console.error('Error fetching products:', err);
  //       this.error = 'No se pudieron cargar los productos';
  //       this.loading = false;
  //     },
  //   });
  // }
  
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