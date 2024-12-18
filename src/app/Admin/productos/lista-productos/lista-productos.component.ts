import { Component, OnInit} from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

interface Product {
  productoId: number;
  productoIdImagen: number;
  productoNombre: string;
  productoDescripcion: string;
  productoVeces: number;
  imageUrl?: string;
  productTipo: string;
}

interface ApiResponse {
  body: Product[];
}

interface ImageResponse {
  img_url?: string;
}

@Component({
  selector: 'lista-productos-admin',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Product[] = [];
  loading = false;
  error: string | null = null;

  constructor(private translate: TranslateService ,private api: ApiService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');  // Cambia 'es' por 'en' si deseas usar inglés
  }
  ngOnInit() {
    this.loadProductsWithImages();
  }

  loadProductsWithImages() {
    this.loading = true;

    this.api.getAllProducts().pipe(
      map((response: ApiResponse) => response.body),
      map((products: Product[]) => products.map(product => this.getProductWithImage(product))),
      catchError(err => {
        this.handleError(err);
        return of([]);
      })
    ).subscribe({
      next: (productsWithImages: Observable<Product>[]) => {
        forkJoin(productsWithImages).subscribe({
          next: (resolvedProducts: Product[]) => {
            this.productos = resolvedProducts;
            this.loading = false;
          },
          error: (err) => this.handleError(err)
        });
      }
    });
  }

  private getProductWithImage(product: Product): Observable<Product> {
    console.log(product)
    return this.api.getUrlImg(product.productoIdImagen).pipe(
      map((response: ImageResponse) => ({
        ...product,
        imageUrl: response.img_url ? `http://localhost:3000/${response.img_url}` : 'assets/default-product.png'
      })),
      catchError(() => of({
        ...product,
        imageUrl: 'assets/default-product.png'
      }))
    );
  }

  private handleError(err: any) {
    console.error('Error al cargar productos:', err);
    this.error = 'No se pudieron cargar los productos';
    this.loading = false;
  }
}