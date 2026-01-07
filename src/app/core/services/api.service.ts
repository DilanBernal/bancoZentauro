import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError, map, forkJoin, firstValueFrom } from 'rxjs';
import { User } from '../models/user.model';
import { ProductSolicitud } from '../models/product-solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public apiUrl = 'https://hjsgcvmt-8080.use2.devtunnels.ms'
  // private apiImgUrl = 'https://hjsgcvmt-3000.use2.devtunnels.ms'
  // private apiUrl = 'https://dq5jx513-8080.use2.devtunnels.ms'
  // private apiImgUrl = 'https://dq5jx513-3000.use2.devtunnels.ms'

  private apiUrl = 'http://localhost:8080'
  private apiImgUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  /*********************************************************
  *******************Seccion del usuario********************
  *********************************************************/
  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/usr/users`)
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
  registerUser(datos: User): Observable<any> {
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


  //*************************Productos************************
  // registerProduct(datos: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/prd/register`, datos, { observe: 'response' }).pipe(
  //     map((response) => {
  //       return { status: response.status, body: response.body, header: response.headers }
  //     }),
  //     catchError(error => {
  //       console.log(error)
  //       return error
  //     })
  //   )
  // }
  async registerSolicitud(datos: ProductSolicitud): Promise<any> {
    try {
      var respuesta = this.http.post(`${this.apiUrl}/slt/register`, datos, { observe: 'response' }).pipe(
        map((response: any) => {
          return { status: response.status, body: response.body }
        }),
        catchError(error => {
          return error
        })
      )
      return respuesta
    } catch (error) {
      return error
    }
  }


}
