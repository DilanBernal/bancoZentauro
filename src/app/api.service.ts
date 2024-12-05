import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError, map } from 'rxjs';

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
        console.log('Respuesta de la APaI:', response);
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
      map((response: any) => {
        console.log("Map")
        return { status:response.status, body: response.body}
      }),
      catchError(error => {
        console.log(error.status, error)
        switch(error.status){
          case 404:{
            console.log(error)
            console.log(error.status)
            return of({ status: 404, body: "No persona con este email encontrada" });
          }
          case 401:{
            console.log(error.status)
            console.log(error)
            return of({ status: 401, body: "Contraseña incorrecta" });
          }
        }
        return "throwError(error)";
      })
    );
  }
}
