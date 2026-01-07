import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { ImgApiService } from './img-api.service';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private imgApiService: ImgApiService) { }

  registerProduct(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/product/register`, data, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, });
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/prd/products`, { observe: 'response' }).pipe(
      tap((response) => {
      }),
      map((response) => {
        return { status: response.status, body: response.body, Headers: response.headers, ImgUrl: response.body }
      }),
      catchError(error => {
        return "throwError(error)";
      })
    )
  }
  // getAllProdu
  async getAllProductsJson(): Promise<Product[]> {
    try {
      // Obtener todos los productos
      const data: ApiResponse<Product> = await firstValueFrom(this.getAllProducts());

      // Procesar cada producto para obtener su URL de imagen
      const productsWithImages = await Promise.all(
        data.body.map(async (product) => {
          try {
            const response = await this.imgApiService.getUrlImg(product.productoIdImagen).toPromise();
            return {
              ...product,
              imageUrl: response.img_url ? `${environment.apiImgUrl}/${response.img_url}` : 'Error.png',
            };
          } catch (error) {
            console.error(`Error obteniendo imagen para producto ${product.productoNombre}:`, error);
            return {
              ...product,
              imageUrl: 'Error.png', // Valor por defecto en caso de error
            };
          }
        })
      );

      console.log(productsWithImages)
      return productsWithImages;

    } catch (error) {
      console.error('Error al cargar productos:', error);
      throw new Error('No se pudieron cargar los productos, error con el servidor');
    }
  }
  async getProductById(id: number): Promise<Product> {
    try {
      // Obtener el producto por su ID
      const dataProduct: Product = await firstValueFrom(this.http.get<Product>(`${this.apiUrl}/prd/searchById/${id}`)
      );

      // Obtener la URL de la imagen asociada al producto
      try {
        const response = await firstValueFrom(this.imgApiService.getUrlImg(dataProduct.productoIdImagen));
        dataProduct.imageUrl = response.img_url
          ? `${environment.apiImgUrl}/${response.img_url}`
          : 'Error.png';
      } catch (imgError) {
        console.error(`Error obteniendo imagen para producto ${dataProduct.productoNombre}:`, imgError);
        dataProduct.imageUrl = 'Error.png'; // Valor por defecto en caso de error
      }

      console.log(dataProduct);
      return dataProduct;
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      throw new Error('No se pudo cargar el producto, error con el servidor');
    }
  }


  async getAllSolicitudProduct(): Promise<Product[]> {
    try {
      var dataSolicitud = this.http.get(`${this.apiUrl}/slt/solicitudes`).subscribe((products) => {
        console.log(dataSolicitud)
      })

      return this.getAllProductsJson();
    } catch (error) {
      console.log(error)
      throw new Error('error' + error)
    }
  }

}
