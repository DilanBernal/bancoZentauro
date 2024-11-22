import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  selectedItem:string = '';
  
  constructor(private router:Router){}

  Home(){
    this.router.navigate(["home"]);
    this.selectedItem = ''
  }

  Products(){
    this.router.navigate(["products"]);
    this.selectedItem = "products";
  }

  ProductInfo(){
    this.router.navigate(["product-info"]);
  }

  Services(){
    this.router.navigate(["creacion-productos"]);
    this.selectedItem = "services";
  }

  Login(){
    this.router.navigate(["login"]);
  }

  Signin(){
    this.router.navigate(["signin"]);
  }

}
