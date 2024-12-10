import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError, map, forkJoin, firstValueFrom } from 'rxjs';

interface enumProductTipo {
  credito: string;
  debito: string;
  prepago: string;
}

interface Product {
  productoId: number,
  productoIdImagen: number;
  productoNombre: string;
  productoDescripcion: string;
  productoTipo: enumProductTipo;
  imageUrl?: string;  // Añadimos una propiedad para almacenar la URL de la imagen
}

interface ProductSolicitud {

}

interface ApiResponse<T> {
  body: T[];
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dq5jx513-8080.use2.devtunnels.ms'
  private apiImgUrl = 'https://dq5jx513-3000.use2.devtunnels.ms'

  // private apiUrl = 'http://localhost:8080'
  // private apiImgUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  /*********************************************************
  *******************Seccion del usuario********************
  *********************************************************/
  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usr/users`)
  }

  existEmail(datos: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/usr/existByEmail/${datos}`).pipe(
      tap(response => {
      }),
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }
  registerUser(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usr/register`, datos);
  }

  loginUser(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usr/login`, datos, { observe: 'response' }).pipe(
      tap((response: any) => {
      }),
      map((response: any) => {
        return { status: response.status, body: response.body }
      }),
      catchError(error => {
        console.log(error.status, error)
        switch (error.status) {
          case 404: {
            console.log(error)
            console.log(error.status)
            return of({ status: 404, body: "No persona con este email encontrada" });
          }
          case 401: {
            console.log(error.status)
            console.log(error)
            return of({ status: 401, body: "Contraseña incorrecta" });
          }
        }
        return "throwError(error)";
      })
    );
  }


  /*********************************************************
  *******************Seccion del producto********************
  *********************************************************/

  //*************************Imagenes************************
  addImg(imagen: File, nombre: string): Observable<any> {

    const datos = new FormData;

    datos.append('file', imagen)
    datos.append('nombre', nombre)

    return this.http.post(`${this.apiImgUrl}/file`, datos, { observe: 'response' }).pipe(
      map((response) => {
        console.log(map)
        return { status: response.status, body: response.body, header: response.headers }
      }),
      catchError(error => {
        switch (error.status) {
          case 400:
            console.log(error)
            return of({ status: error.status });
          case 500:
            console.log(error)
            console.log(error.status)
            return of({ status: error.status, body: error.body })
        }
        return "throwError(error)";
      }
      )
    );
  }

  getOneImg(id: number): Observable<any> {
    return this.http.get(`${this.apiImgUrl}/uploadOne/${id}`, { observe: 'response' }).pipe(
      map((response) => {
        return { status: response.status, body: response.body, header: response.headers }
      })
    )
  };

  getUrlImg(id: number): Observable<any> {
    return this.http.get(`${this.apiImgUrl}/uploadOne/${id}`, { observe: 'response' }).pipe(
      map((response) => {
        var tempResponse = response.body
        return tempResponse
      })
    )
  }

  //*************************Productos************************
  registerProduct(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/prd/register`, datos, { observe: 'response' }).pipe(
      tap((response) => {
      }),
      map((response) => {
        return { status: response.status, body: response.body, header: response.headers }
      }),
      catchError(error => {
        console.log(error)
        return error
      })
    )
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
      const data: ApiResponse<Product> = await this.getAllProducts().toPromise();

      // Procesar cada producto para obtener su URL de imagen
      const productsWithImages = await Promise.all(
        data.body.map(async (product) => {
          try {
            const response = await this.getUrlImg(product.productoIdImagen).toPromise();
            return {
              ...product,
              imageUrl: response.img_url ? `${this.apiImgUrl}/${response.img_url}` : 'Error.png',
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
      const dataProduct: Product = await firstValueFrom(
        this.http.get<Product>(`${this.apiUrl}/prd/searchById/${id}`)
      );
  
      // Obtener la URL de la imagen asociada al producto
      try {
        const response = await firstValueFrom(this.getUrlImg(dataProduct.productoIdImagen));
        dataProduct.imageUrl = response.img_url
          ? `${this.apiImgUrl}/${response.img_url}`
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
