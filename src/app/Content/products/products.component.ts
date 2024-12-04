import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private router:Router){}

  tarjetaEstudiantes(){
    this.router.navigate(["estudiantes"]);
  }

  tarjetaPlus(){
    this.router.navigate(["plus"]);
  }

  tarjetaPremium(){
    this.router.navigate(["premium"]);
  }

}
