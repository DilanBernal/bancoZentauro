import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../../../core/services/api.service';
import { ProductApiService } from '../../../../core/services/product-api.service';
interface enumProductTipo {
  credito: string;
  debito: string;
  prepago: string;
}

interface Product {
  productoId: number;
  productoIdImagen: number;
  productoNombre: string;
  productoDescripcion: string;
  productTipo: enumProductTipo;
  imageUrl?: string;  // Añadimos una propiedad para almacenar la URL de la imagen
}

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css',
  standalone: false
})
export class ProductInfoComponent {

  product?: Product;
  error?: string;
  loading: boolean = false;

  constructor(
    private api: ProductApiService,
    private route: ActivatedRoute,
    private translate: TranslateService,  // Inyectamos el servicio de traducción
    private router: Router
  ) { }

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarProducto(productId);
  }

  registerSolicitud(id: number) {
    this.router.navigate([`product/${id}/form-solicitud`])
  }
  async cargarProducto(int: number) {
    this.loading = true
    try {
      this.product = await this.api.getProductById(int);
      this.loading = false;
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      this.loading = false;
      this.error = this.translate.instant('producto.error');  // Traducción del mensaje de error
    }
  }

}
