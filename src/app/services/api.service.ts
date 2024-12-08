import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dq5jx513-8080.use2.devtunnels.ms'
  // private apiImgUrl = 'https://dq5jx513-3000.use2.devtunnels.ms'

  // private apiUrl = 'http://localhost:8080'
  private apiImgUrl = 'http://localhost:3000'
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
        console.log('Respuesta de la APaI:', response);
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
        console.log('Respuesta de la API:', response.body);
        console.log(response.status)
      }),
      map((response: any) => {
        console.log("Map")
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
      tap((response) => {
        console.log("Respuesta de la API de imagenes:", response.body)
        console.log("Estado de la api: ", response.status)
      }),
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
    return this.http.get(`${this.apiImgUrl}/uploadOne/${id}`, {observe: 'response'}).pipe(
      map((response) => {
        return { status: response.status, body: response.body, header: response.headers }
      })
    )
  };

  getUrlImg(id: number): Observable<any> {
    return this.http.get(`${this.apiImgUrl}/uploadOne/${id}`, {observe: 'response'}).pipe(
      map((response) =>{
        var tempResponse = response.body
        console.log("teampresponse url",tempResponse)
        return tempResponse
      })
    )
  }

  //*************************Productos************************
  registerProduct(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/prd/register`, datos, { observe: 'response' }).pipe(
      tap((response) => {
        console.log("Respuesta de la api par registrar producto", response.body)
        console.log("Estado de la api reg prod" + response.status)
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
    console.log("entre")
    return this.http.get(`${this.apiUrl}/prd/products`, { observe: 'response' }).pipe(
      tap((response) => {
        console.log("Respuesta de la API de imagenes:", response.body)
        console.log("Estado de la api: ", response.status)
      }),
      map((response) => {
        return { status: response.status, body: response.body, Headers: response.headers, ImgUrl: response.body}
      }),
      catchError(error => {
        return "throwError(error)";
      })
    )
  }
}
