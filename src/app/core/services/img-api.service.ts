import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImgApiService {

  private readonly apiImgUrl: string = environment.apiImgUrl;

  constructor(private http: HttpClient) { }

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
}
