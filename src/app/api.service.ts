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
}
