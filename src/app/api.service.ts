import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dq5jx513-8080.use2.devtunnels.ms'

  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    return this.http.get(`${this.apiUrl}/usr/users`)
  }

  existEmail(datos:any): Observable<any>{
    return this.http.get(`${this.apiUrl}/usr/existByEmail/${datos}`).pipe(
      tap(response => {
        console.log('Respuesta de la API:', response);
      }),
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }
  postUser(datos:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/usr/register`, datos);
  }

  loginUser(datos:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/usr/login`,datos, { observe : 'response'}).pipe(
      tap((response:any) => {
        console.log('Respuesta de la API:', response.body);
        console.log(response.status)
      }),
      catchError(error => {
        console.log(error.status)
        switch(error.status){
          case 404:{
            console.log(error)
            break
          }
          case 401:{
            console.log(error)
            break
          }
        }

        return throwError(error);
      })
    );
  }
}
