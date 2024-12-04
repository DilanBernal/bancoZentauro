import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dq5jx513-8080.use2.devtunnels.ms/'

  constructor(private http: HttpClient) { }
}
