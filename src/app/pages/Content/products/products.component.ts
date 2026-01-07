import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { ProductApiService } from '../../../core/services/product-api.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: false
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private router: Router,
    public api: ProductApiService
  ) { }


  infoComponent(id: any) {
    this.router.navigate([`products/${id}`])
  }

  ngOnInit() {
    this.loading = true;

    this.api.getAllProductsJson().then((products) => {
      this.loading = false
      if (products.length !== 0) {
        this.products = products
      } else if (products.length == 0) {

        this.error = 'No se pudieron encontrar productos'
      }
    })
      .catch((error) => {
        this.error = error.message
        this.loading = false
      })

  }

}